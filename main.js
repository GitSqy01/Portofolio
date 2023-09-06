function toggleDetail(e){
    const target = $(e.target)

    if($(target).hasClass("active")){
        $(target).html("More Info").removeClass("active")
    }
    else{
        $(target).html("Less Info").addClass("active")

    }


    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()
}

function onFormSubmit(e){
    e.preventDefault()
    const email = $("#inp_email")
    const subjek = $("#inp_subjek")
    const message = $("#inp_message")

    if(!$(email).val()){
        alert("email is required")
    }else if (!$(subjek).val()){
        alert("subjek is required")
    }else if(!$(message).val()){
        alert("message is required")
    }else{
        alert("Form Submitted")
        $(email).val("")
        $(subjek).val("")
        $(message).val("")
    }
}
