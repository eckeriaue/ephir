
<div x-data="editor()">
    <template x-if="isLoaded()">
        <div class="menu">
            <button type="button"
                @click="toggleHeading({ level: 1 })"
                :class="{ 'is-active': isActive('heading', { level: 1 }, updatedAt) }"
            >
                H1
            </button>
            <button type="button" @click="toggleBold()" :class="{ 'is-active' : isActive('bold', updatedAt) }">
                Bold
            </button>
            <button type="button" @click="toggleItalic()" :class="{ 'is-active' : isActive('italic', updatedAt) }">
                Italic
            </button>
            <button type="button" @click="setLink()" :class="{ 'is-active' : isActive('link', updatedAt) }">
                link
            </button>
        </div>
    </template>

    <div x-ref="root"></div>
</div>
