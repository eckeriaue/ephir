import { newE2EPage } from '@stencil/core/testing';

describe('mark-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<mark-editor></mark-editor>');
    const element = await page.find('mark-editor');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<mark-editor></mark-editor>');
    const component = await page.find('mark-editor');
    const element = await page.find('mark-editor >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
