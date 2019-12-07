<?php
        if (isset($_POST['submit'])) {
            $name = $_POST['name'];
            $emailFrom = $_POST['email'];
            $message = $_POST['message'];

            $mailTo = "marksalama10@gmail.com"
            $headers = "From: ".$mailFrom;

            $txt = "You Have Recieved an E-Mail From" .$name.".\n\n".$message;

            mail($mailTo, $txt, $headers);
            header("Location: contact.html/mailsent");

        }

        ?>
    