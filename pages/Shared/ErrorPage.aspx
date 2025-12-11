<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ErrorPage.aspx.cs" Inherits="CBC.pages.Shared.ErrorPage" %>

<!-- #include file="~/pages/Shared/header.html" -->
<script> 
    $(document).ready(function () {
        $('body').append('<script type="text/javascript" src="../../js/jsFunctions.js?v=' + Math.random() + '" />')
        console.log(Get("Error"))
    });
</script>
<body style="overflow-y: hidden">
    <div style="position: absolute; top: 30%;left: 50%; transform: translate(-50%, -50%);">
        <center><img src="../../assets/img/ico/warning-yellow.png" class="h_50 w_60 marginBottom20" /></center> 
        <span class="font19">Oops! Something went wrong.</span>  <br>
        <span class="font12">Please call your System Administrator.</span>
    </div>
</body>
<!-- #include file="~/pages/Shared/footer.html" -->
