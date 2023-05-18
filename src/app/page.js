
import  './globals.css'
import { DM_Serif_Display} from 'next/font/google';


const inter = DM_Serif_Display({ weight: '400',subsets: ['latin'] });
export default function Home() {


const handleClick = () =>  {
    console.log('Free pizza!');
}
  return (
  <main className={inter.className}>

 <div style={{textAlign:'center',borderBottom:'1px solid lightgrey',paddingTop:'5%',paddingBottom:'10%'}}>
  <div style={{fontSize:'400%'}}>Sahil Bakoru</div>
  <div style={{fontSize:'400%'}}>is a</div>
  <div style={{fontSize:'400%'}}>developer.</div>
 </div> 
 <div style={{textAlign:'center',borderBottom:'1px solid lightgrey',paddingTop:'5%',paddingBottom:'10%'}}>
  <div style={{fontSize:'400%'}}>Projects</div>
  <button  style={{border:'none',padding:'20px',background:'#F5F5F5',borderRadius:'10px' ,marginTop:'2%',cursor:'pointer' }} >
     <div style={{fontSize:'20px'}}>View projects</div></button>
 </div> 
 <div style={{textAlign:'center',borderBottom:'1px solid lightgrey',paddingTop:'5%',paddingBottom:'10%'}}>
  <div style={{fontSize:'400%'}}>Booklist.</div>
 </div> 
 

  </main>

  )
}
