// validation script here
const patterns = {
    username : /^[\w@.]{5,10}$/,
    email : /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,3})?$/,
    password : /^[\w@-]{8,20}$/i,
    telephone : /^\d{10}$/,
    profileSlug : /^[\w@-\s]{8,20}$/

}

const validation = (field,regex) => {
    if(regex.test(field.value)){
        field.className = "valid"
    }else{
        field.className = "Invalid"
    }
}

const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener('keyup',(e)=>{
        validation(e.target,patterns[e.target.attributes.name.value])
    })
})


