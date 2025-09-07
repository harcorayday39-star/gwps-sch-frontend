
const SAMPLE = {
  admin:{username:'admin', password:'admin123'},
  students:[{name:'John Doe', reg:'GWPS001', password:'12345', results:{}}],
  paymentInfo:{accountName:"God's Will Private Secondary School", accountNumber:"1234567890", bank:"Access Bank"},
  exams:[
    {id:'EX1', title:'Math Test', durationMinutes:5,
      mcqs:[
        {q:'2+2 = ?', options:['1','2','3','4'], answerIndex:3},
        {q:'5-2 = ?', options:['1','2','3','4'], answerIndex:2},
        {q:'3*3 = ?', options:['6','7','8','9'], answerIndex:3},
        {q:'10/2 = ?', options:['2','3','4','5'], answerIndex:3},
        {q:'6-1 = ?', options:['3','4','5','6'], answerIndex:2}
      ],
      written:[{q:'Describe addition in one sentence.'},{q:'Explain why 2+2=4.'}]
    }
  ]
};

export function load(){ if(!localStorage.getItem('gwpss')){ localStorage.setItem('gwpss', JSON.stringify(SAMPLE)); } return JSON.parse(localStorage.getItem('gwpss')); }
export function save(data){ localStorage.setItem('gwpss', JSON.stringify(data)); }
