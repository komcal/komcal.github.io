var projects = [
  {
    text: 'KU 76 anniversary',
    url: 'https://komcal.github.io/ku76years'
  },
  {
    text: 'KU pre register',
    url: 'https://zugarzeeker.github.io/ku-courses-frontend/'
  },
  {
    text: 'TEDxKasetsart',
    url: 'http://tedxkasetsartu.net'
  },
  {
    text: 'Zeabus Website',
    url: ''
  },
  {
    text: 'festforfood',
    url: 'http://festforfood.com'
  },
  {
    text: 'dxracer shop',
    url: ''
  },
  {
    text: 'bcbk live twitter',
    url: ''
  },
  {
    text: 'ais blogs',
    url: 'http://www.ais.co.th/thestartup/'
  },
  {
    text: 'brown condo',
    url: 'http://www.browncondo.com/ratchada32/'
  },
  {
    text: 'sansiri scanme',
    url: 'http://sansiri.com/singlehouse/saransiri_kohkaew/scanme/#/'
  },
]

var ulElement = document.getElementById('side-project-ul');
projects.map(function(project) {
  var liElement = document.createElement('li');
  var a = document.createElement('a');
  a.setAttribute('href', project.url);
  a.setAttribute('target', '_blank');
  a.appendChild(document.createTextNode(project.text));
  liElement.appendChild(a);
  ulElement.appendChild(liElement);
});