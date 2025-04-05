export default function FormTest() {

    function signUp(formData) {    
        // const email = formData.get("email")
        // const password = formData.get("password")
        // const description = formData.get("description")
        // const status = formData.get("employee")
        // const diet = formData.getAll("dietryRestrictions")
        // const color = formData.get("favColor")
        // console.log(email, password, description, status, diet,color); 
        console.log(Object.fromEntries(formData));    
    }

    return (
        <section>
           <h1>SignUp Form</h1>

           <form action={signUp}>
              <label htmlFor="email">Email :</label>
              <input id="email" defaultValue="munnabro@gmail.com" type="email" name="email" placeholder="Enter your email" />
              <br /><br />
              
              <label htmlFor="password">Password :</label>
              <input id="password" defaultValue="1234" type="password" name="password" placeholder="type your password" />
              <br /><br />

              <label htmlFor="description"> Description : </label>
              <textarea id="description" defaultValue="This is Description" name="description"></textarea>
              <br /><br />

              <fieldset>
                <legend>Employment Status</legend>
                <label> 
                <input type="radio" name="employee" value="UnEmployeed" defaultChecked />
                UnEmployeed
                </label> <br />
              
                <label htmlFor=""> 
                <input type="radio" name="employee" value="Part-Time" />
                Part-Time 
                </label> <br />

                <label htmlFor="">  
                <input type="radio" name="employee" value="Full-Time" />
                Full-Time 
                </label> <br />
              </fieldset>
              <br /><br />


              <fieldset>
                <legend>Dietry Restrictions</legend>
                <label htmlFor="">
                    <input type="checkbox" name="dietryRestrictions" value="cheese" />
                    Cheese
                </label><br />
                <label htmlFor="">
                    <input type="checkbox" name="dietryRestrictions" value="Pepporoni" />
                    Pepporoni
                </label><br />
                <label htmlFor="">
                    <input type="checkbox" name="dietryRestrictions" value="Lettuce" />
                    Lettuce
                </label><br />
              </fieldset>
              <br />


              <label htmlFor="favColor">What is your Favourite Color</label><br />
              <select name="favColor" id="favColor" defaultValue="" required>
                    <option value="" disabled>--Choose a color--</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
              </select>
              <br />

              <button>Submit Data</button>
           </form>

        </section>
    )
}