// action to handle link selections from menu
export default class BookMenu {
  static handleSelections = (item) => {
    const listSection = document.getElementById('list-all-books');
    const addSection = document.getElementById('add-new-book');
    const contactSection = document.getElementById('see-contact');
    const copyright = document.getElementById('copyright');
    const list = document.getElementById('list');
    const add = document.getElementById('add');
    const contact = document.getElementById('contact');
    localStorage.setItem('page', item.id);
    const page = localStorage.getItem('page');
    if (page === 'list') {
      // color style for navigation
      list.classList.remove('inactive');
      list.classList.add('active');
      add.classList.remove('active');
      add.classList.add('inactive');
      contact.classList.remove('active');
      contact.classList.add('inactive');
      // visibility style for sections
      addSection.classList.remove('visible');
      addSection.classList.add('hidden');
      listSection.classList.remove('hidden');
      listSection.classList.add('visible');
      contactSection.classList.remove('visible');
      contactSection.classList.add('hidden');
      copyright.classList.remove('absolute-bottom');
      copyright.classList.add('copyrights');
    } else if (page === 'add') {
      // color style for navigation
      list.classList.remove('active');
      list.classList.add('inactive');
      add.classList.remove('inactive');
      add.classList.add('active');
      contact.classList.remove('active');
      contact.classList.add('inactive');
      // visibility style for sections
      addSection.classList.remove('hidden');
      addSection.classList.add('visible');
      listSection.classList.remove('visible');
      listSection.classList.add('hidden');
      contactSection.classList.remove('visible');
      contactSection.classList.add('hidden');
      copyright.classList.remove('copyrights');
      copyright.classList.add('absolute-bottom');
    } else if (page === 'contact') {
      // color style for navigation
      list.classList.remove('active');
      list.classList.add('inactive');
      add.classList.remove('active');
      add.classList.add('inactive');
      contact.classList.remove('inactive');
      contact.classList.add('active');
      // visibility style for sections
      addSection.classList.remove('visible');
      addSection.classList.add('hidden');
      listSection.classList.remove('visible');
      listSection.classList.add('hidden');
      contactSection.classList.remove('hidden');
      contactSection.classList.add('visible');
      copyright.classList.remove('copyrights');
      copyright.classList.add('absolute-bottom');
    }
  };
}
