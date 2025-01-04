<?php
namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\{Post,PostImage};
use Illuminate\Support\Facades\Storage;

function jsonToHtml($data)
{
    $data = json_decode($data)->blocks;
    $ret = '';
    foreach ($data as $item)
    {

        switch ($item->type)
        {
            case 'header':
                $levelSize = $item->data->level;
                $levelText = $item->data->text;
                $ret .= "<h{$levelSize}> $levelText </h{$levelSize}> ";
            break;

            case 'paragraph':
                $levelText = $item->data->text;
                $ret .= "<p>".$levelText."</p>";
            break;
            case 'list':
                $levelStyle = $item->data->style === 'unordered' ? 'ul' : 'ol';
                $levelArr = $item->data->items;

                $list = "<$levelStyle>";
                $listItems = "";
                foreach ($levelArr as $eleItem)
                {
                    $listItems .= "<li> $eleItem </li>";
                }
                $list .= $listItems;
                $list .= "</$levelStyle>";

                $ret .= $list;
            break;
            case 'image':
                // Image Block Type
                $levelFilePath = $item->data->url;
                $levelCaption = $item->data->caption;
                $ret .= '<img style="max-width: 100%;vertical-align: bottom;display: block;" alt="' . $levelCaption . '" src="' . $levelFilePath . '"><center>' . $levelCaption . '</center>';
            break;
            case 'table':
                $tableHtml = "<table>";
                foreach ($item->data->content as $row)
                {
                    $tableHtml .= "<tr>";
                    foreach ($row as $column){
                        $tableHtml .= "<td>$column</td>";
                    }
                    $tableHtml .= "</tr>";
                }
                $tableHtml .= "</table>";

                $ret .= $tableHtml;
                break;
            case 'quote':
                $ret .= '<blockquote>
                <p>';
                $ret .= $item->data->text;
                $ret .= "―".$item->data->caption;
                $ret .= "</p></blockquote>";
                break;
            default:
                throw new Exception("Unknown Block Type: '" . $item->type."'");
            }

    }
    return $ret;
}

class PostController extends Controller
{
    /**
     * @return RedirectResponse
     */
    public function create(Request $request): RedirectResponse
    {
        $postName = $request->get('postName');
        $postContent = $request->get('postContent');
        $post = Post::create([
            'title' => $postName,
            'content_json' => json_encode($postContent),
            'content_html' => jsonToHtml($postContent),
            'user_id' => $request->user()->id,
        ]);
        $post->save();


        if ($attachmentFiles = $request->file('attachmentFiles')) {
            $userId = auth()->id();
            $path = "user-$userId-post-{$post->id}";
            foreach ($attachmentFiles as $attachmentFile) {
                $postImage = PostImage::create([
                    'post_id' => $post->id,
                    'src' => Storage::url(Storage::disk('public')->put($path, $attachmentFile)),
                ])->save();
            }
        }

        return to_route('index');
    }
    /**
     * @return View
     */
    public function getAll(Request $request): View {
        $offset = $request->query('offset', 0);
        $limit = $request->query('limit', 20);
        return view('index', (array) literal(
            posts: Post::orderBy('id', 'desc')
                ->offset($offset)
                ->limit($limit)
                ->with('user')
                ->with('images')
                ->get(),
        ));
    }

    public function read($id): View {
        return view('read-post', ['id' => $id]);
    }
}
