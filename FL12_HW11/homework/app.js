const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

function createTree(container, name) {
  container.append(createTreeDom(name));
}

function createTreeDom(name) {
  if (!name) {
    return
  }
  let ul = document.createElement('ul');
  ul.classList.add('none');
  for (let prop = 0; prop < name.length; prop++) {
    let li = document.createElement('li');
    if (name[prop].folder) {
      li.innerHTML = `<div class='folder'><i class="material-icons close">folder</i> ${name[prop].title}</div>`
    } else if (!name[prop].folder && name[prop].title) {
      li.innerHTML = `<div><i class="material-icons file">insert_drive_file</i> ${name[prop].title}<div>`
    }
    let childrenUl = createTreeDom(name[prop].children);
    if (childrenUl) {
      li.append(childrenUl);
    }
    ul.append(li);
  }
  return ul;
}
createTree(rootNode, structure);
let firstEl = document.getElementsByTagName('ul')[0];
firstEl.classList.add('visible');
let section = rootNode.querySelectorAll('.folder');
for (let i = 0; i < section.length; i++) {
  section[i].addEventListener('click', function (el) {
    el.stopPropagation()
    if (this.querySelector('i').textContent === 'folder') {
      this.parentElement.querySelector('i').innerHTML = 'folder_open';
    } else if (this.querySelector('i').textContent === 'folder_open') {
      this.parentElement.querySelector('i').innerHTML = 'folder';
    }
    if (!this.parentElement.querySelector('ul')) {
      let li = document.createElement('li');
      if (!this.parentElement.querySelector('li')) {
        li.insertAdjacentHTML('beforeend', `<p>Folder is empty</p>`)
        li.classList.toggle('empty_visible')
        this.parentElement.append(li)
      } else {
        this.parentElement.querySelector('li').classList.toggle('none');
      }
    } else if (this.parentElement.querySelector('ul')) {
      this.parentElement.querySelector('ul').classList.toggle('none');
    }
  });
}