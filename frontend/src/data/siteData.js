export const DEFAULT_DATA={
 hero:{title:'BUILD. CREATE. INNOVATE.',description:'A community of builders exploring AI, development, data, robotics, design and emerging technology.',cta:'EXPLORE THE WINGS'},
 intro:{title:'WHERE TECHNOLOGY MEETS CREATIVITY.',description:'A technical and creative community built around learning, experimentation, collaboration and shipping meaningful work.'},
 wings:[
  {id:'ai',number:'01',name:'AI / ML',description:'Explore artificial intelligence, machine learning and intelligent systems.',icon:'Brain',accent:'Neural networks · CV · NLP'},
  {id:'dev',number:'02',name:'DEVELOPMENT',description:'Build modern web, app and full-stack experiences with practical engineering.',icon:'Code2',accent:'Frontend · Full Stack · Apps'},
  {id:'dsa',number:'03',name:'DSA',description:'Master data structures, algorithms, competitive programming and problem solving.',icon:'Binary',accent:'Algorithms · CP · Problem Solving'},
  {id:'robotics',number:'04',name:'ROBOTICS',description:'Prototype intelligent machines through sensors, control, embedded systems and 3D thinking.',icon:'Bot',accent:'Embedded · Sensors · Automation'},
  {id:'design',number:'05',name:'GRAPHICS DESIGNING',description:'Shape interfaces, identities and motion through visual systems and creative direction.',icon:'PenTool',accent:'UI/UX · Branding · Motion'}
 ],
 resources:[
  {id:1,category:'DSA',title:'DSA ROADMAP',description:'Beginner-to-advanced learning path for data structures and algorithms.',date:'Editable date',type:'ROADMAP'},
  {id:2,category:'AI / ML',title:'ML STARTER KIT',description:'A curated frontend-only placeholder for notes, tutorials and learning material.',date:'Editable date',type:'NOTES'},
  {id:3,category:'DEVELOPMENT',title:'WEB BUILD GUIDE',description:'Practical resources for building modern web experiences.',date:'Editable date',type:'GUIDE'}
 ],
 gallery:[
  {id:1,title:'Workshop / Event',category:'EVENTS',description:'Replace this placeholder with your event image.',image:''},
  {id:2,title:'Build Session',category:'PROJECTS',description:'Replace this placeholder with your project image.',image:''},
  {id:3,title:'Creative Work',category:'DESIGN',description:'Replace this placeholder with your design image.',image:''},
  {id:4,title:'Team Activity',category:'TEAM',description:'Replace this placeholder with your team image.',image:''}
 ],
 about:{text:'We create a space where technical curiosity and creative practice meet.',mission:'Learn together, build boldly and make technology accessible through community.',vision:'A culture of builders who turn ideas into useful, thoughtful experiences.',stats:[{label:'WINGS',value:'05+'},{label:'MEMBERS',value:'100+'},{label:'PROJECTS',value:'20+'},{label:'EVENTS',value:'10+'}]},
 contact:{address:'Campus of Siwan Engineering College, Mairwa Road, Old Suta Mill Factory, Bhada Khurd, Siwan Pin - 841226',phone:'',email:'gecsiwan.techkshitiz@gmail.com',mapUrl:''},
 social:{instagram:'',linkedin:'',github:'',youtube:''}
};
const KEY='techkshitiz_site_data_v1';
export function getData(){try{const v=localStorage.getItem(KEY);return v?JSON.parse(v):DEFAULT_DATA}catch{return DEFAULT_DATA}}
export function saveData(data){localStorage.setItem(KEY,JSON.stringify(data));window.dispatchEvent(new Event('site-data-updated'));}
export function updateData(patch){const next={...getData(),...patch};saveData(next);return next}
export function resetData(){localStorage.removeItem(KEY);window.dispatchEvent(new Event('site-data-updated'));return DEFAULT_DATA}
export {KEY};
