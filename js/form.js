$('form').on("submit", function(event){
    let inputs = [];
    inputs.push($("#name"));
    inputs.push($("#sub"));
    inputs.push($("#msg"));
    let values = [];
    for (let i = 0; i < inputs.length; i++) {
        values.push(inputs[i].val());
    }
    console.log(values);
    let fullMessage = values[2] + "\n\n" + values[0];
    let subject = "Contact Mechanical Wizards";
    if (values[1] != "")
        subject = values[1];
    let eSubject = encodeURIComponent(subject);
    let eBody = encodeURIComponent(fullMessage);
    let to = encodeURIComponent("micplays115@gmail.com");
    let address = "mailto:" + to + "?subject=" + eSubject + "&body=" + eBody;
    console.log(address);
    window.location.href = address;
});



    
