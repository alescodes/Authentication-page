import { useState } from "react";
import React from "react";
import "../Accont.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const Register = ()=> {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [age, agechange] = useState("");
  const [hobbies, hobbieschange] = useState("");
  const [sex, sexchange] = useState("");
  const [issues, issueschange] = useState("");

  const navigate = useNavigate();


  const handlesubmit = (e)=> {
    e.preventDefault();
    let regobj = {id, name, password, email, age, hobbies, sex, issues};
    //console.log(regobj);

    fetch('http://localhost:5000/user',{
      method:'post',
      headers: {'content-type': "application/json"},
      body:JSON.stringify(regobj)
    }).then((res)=>{
      toast.success('Account Created Successfully')
      navigate('/login')

    }).catch((err)=>{
    toast.error('Failed:' *err.message);


    });
  };
  return (
    <div>
      <div className="register">
        <form action="/" className="container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="cardHeader">
              <h2>Create Account</h2>
            </div>
            <div className="cardBody">
              <div className="row">
                <div className="column">
                  <div className="formGroup">
                    <label >
                      User Name <span className="errmsg">*</span>
                    </label>

                    <input
                      value={id}
                      onChange={e=> idchange(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Ucee"
                      required
                    />
                  </div>
                  </div>
                  <div className="column">
                  <div className="formGroup">
                    <label >
                      FullName <span className="errmsg">*</span>
                    </label>
                    <input
                      value={name}
                      onChange={e=> namechange(e.target.value)}
                      type="name"
                      className="form-control"
                      placeholder="Sandy Baby"
                      required
                    />
                  </div>
                  </div>
                  <div className="column">
                  <div className="formGroup">
                    <label >
                      Password <span className="errmsg">*</span>
                    </label>
                    <input
                      value={password}
                      onChange={e=> passwordchange(e.target.value)}
                      type="password"
                      className="form-control"
                      placeholder="888***88"
                      required
                    />
                  </div>
                  </div>
                  <div className="column">
                  <div className="formGroup">
                    <label >
                      Email <span className="errmsg">*</span>
                    </label>
                    <input
                      value={email}
                      onChange={e=> emailchange(e.target.value)}
                      type="email"
                      className="form-control"
                      placeholder="Sandybaby@youremail.com"
                      required
                    />
                  </div>
                  </div>
                  <div className="column">
                  <label>others</label>
                  <span className="cardSelect">
                    <select
                      className="form-control"
                      value={age}
                      onChange={e=> agechange(e.target.value)}
                    >
                      <option value="age">Age</option>
                      <option value="age">18-20</option>
                      <option value="age">18-20</option>
                    </select>
                    <select
                      className="form-control"
                      value={sex}
                      onChange={e=> sexchange(e.target.value)}
                    >
                      <option value="sex">Sex</option>
                      <option value="female">female</option>
                      <option value="male">male</option>
                    </select>
                    <select
                      className="form-control"
                      value={hobbies}
                      onChange={e=> hobbieschange(e.target.value)}
                    >
                      <option value="hobbies">Hobbies</option>
                      <option value="dancing">dancing</option>
                      <option value="reading">reading</option>
                    </select>
                    <select
                      className="form-control"
                      value={issues}
                      onChange={e=> issueschange(e.target.value)}
                    >
                      <option value="age">Mental Health Issues</option>
                      <option value="pcos">Pcos</option>
                      <option value="eating disorder">eating disorder</option>
                    </select>
                  </span>
                </div>
              </div>
            </div>

            <div className="cardfooter">
              <button type="submit" className="btn btnSecondary" >
                Register
              </button>
              <Link classname='btn btnPrimary'>Back</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
