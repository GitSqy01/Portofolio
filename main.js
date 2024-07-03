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
    const email = $("#inp_email").val();
    const subjek = $("#inp_subjek").val();
    const message = $("#inp_message").val();

    if (!email || !subjek || !message) {
        alert("Semua kolom harus diisi");
        return;
    }
     // Buat elemen untuk menampilkan pesan
     const pesanDiv = $("<div>").addClass("pesan-terkirim").html(`
        <h2>Pesan Anda:</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subjek:</strong> ${subjek}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `);

    // Tambahkan pesan ke halaman web
    $("#pesan-area").after(pesanDiv); 

    // Kosongkan formulir
    $("#inp_email, #inp_subjek, #inp_message").val("");
}

