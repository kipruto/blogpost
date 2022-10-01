<template>

    <body >
        <div class="layout-content">
            <div class="layout-primary">
                <div class="login-container">
                    <div class="header-wrapper">

                    <h2 class="title-header">Log in to your account </h2>
                    </div>
		<form>
            <div class="card">
                <label for="name">Email Address or Username</label>
		<input type="name" class="email-address">	
	<div class="keep-logged">
        <input type="checkbox"><p class="check" for="checkbox">Keep me logged in</p>
    </div>
	
		<button type="submit" value="Login" class="login-btn">Continue</button>
        <p class="terms-policy">By continuing with any of the options, you agree to our <a class="terms">Terms of Service</a> and have read our  <a class="policy">Privacy Policy</a></p>
            </div>
<div class="login-divider">
        <span>OR</span>
</div>

<div class="auth-logins">
    <button type="submit" value="Login" class="login-with-google">		<fas class='icon' :icon="['fab', 'google']" /> Continue with Google</button>
        <button type="submit" value="Login" class="login-with-fb"> 			<fas  class='icon'  :icon="['fab', 'facebook']" />Continue with Facebook</button>
</div>
       <div class="lower">
        <p class="login-reg-btn">Don't have an account? <a type="submit" value="Login"> Register</a></p>
        <a class="lost-password" type="submit" value="Login">Lost your password?</a>
       </div>
		</form>
                </div>
	</div>
        </div>
</body>

</template>



<style scoped>
.title-header{
    font-weight: 600;

}
.icon {
        font-size: 16px;
        margin-right:20px;
    }
p{
    font-size: 14px;
    margin: 0;
}
a {
text-decoration: underline !important;
color: #1877F2 !important;
font-size: 14px;
}

html, body {
    font-family: "Sofia" !important;
	color: #444;
	-webkit-font-smoothing: antialiased;
	background: #ffffff;
	
}
.layout-content{
    box-sizing: border-box;
    margin: 0;
    overflow: hidden;
    position: relative;
    width: 50%;
    margin: 5% auto;
	background: #ffffff;

}

.layout-primary{
    display: block;
    margin: auto;
    max-width: 540px;
    margin-top: 64px;
    padding: 0px 20px;
  
}

.login-container{
    display: flex;
    flex-direction: column;
}

 .header-wrapper{
    text-align: center;
    margin-bottom: 40px;
}
.email-address{
    width: 100%;
	height: 45px;
    padding: 0px 0px 0px 10px;
	display: block;
	line-height: 40px;
	font-size: 12px;
  border-radius:         3px;
  -moz-border-radius:    3px;
  -webkit-border-radius: 3px;
  border: 1px solid #c3c4c7;
  background-color: white;
}

.email-address:focus{
    border: 1px solid #7195ff !important;
}
.card{
    display: flex;
    flex-direction: column;
    justify-content: flex-start !important;
    position: relative;
    margin-bottom: 16px;
    border: none;
}
.auth-logins{
    display: flex;
    flex-direction: column;
}

button{
margin-bottom: 20px ;
width: 100%;
	height: 50px;
	display: block;
	text-align: center;
	line-height: 40px;
	font-size: 14px;
  border-radius:         3px;
  -moz-border-radius:    3px;
  -webkit-border-radius: 3px;
  border: none;
  cursor: pointer;

}
label {
    font-size: .875rem;
    line-height: 1.5;
    margin-bottom: 5px;
    float: left;
}

.login-with-google{
    color: rgb(29, 29, 29);
	background-color: #ffffff;
    border: 1px solid #c3c4c7;
    

}
.login-with-fb{
	background-color: #1877F2;
    color: rgb(255, 255, 255);
}
.login-btn{
	background-color: #1DA1F2;
    color: rgb(255, 255, 255);
}
.login-with-google:hover{
background: rgb(252, 252, 252);
border: 1.5px solid #a3a5aa;
}
.login-with-fb:hover{
    background-color: #348bfd;
}
.login-divider{
    margin: 40px 0;
    height: .5px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    background-color: #b3b3b3;
}

.login-divider span {
    background: #ffffff;
    color: #646970;
    font-size: .85rem;
    padding: 5px 20px;
    border-radius: 50px;
    text-align: center;
    text-transform: uppercase;
position: absolute;
    z-index: 2;
    top: -14px;
    left: 45%;
}

.lower{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top:30px;
}
.lost-password{
margin-top:10px;

}
.keep-logged{
    margin: 10px 0px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-content: center;
   
}
.keep-logged p{
text-align: center;
margin: auto 10px;

}


</style>


<script>
export default {
    name: 'MyLogin'
}
</script>