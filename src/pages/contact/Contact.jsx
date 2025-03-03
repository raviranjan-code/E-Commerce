import "./Contact.css"
export const Contact=()=>{
    return(
<>
<div className="contact">
 <form action="https://formspree.io/f/mqaergpr" method="POST">
    <input type="text" placeholder="enter your name" name="username" required />
    <input type="email" placeholder="enter your email" name="email" required/>
    <textarea name="message" placeholder="Enter Your message" required></textarea>
    <button  onClick={() => alert("Submitted successfully!")}>Submit</button>
    </form>   
</div>
</>
    )
}