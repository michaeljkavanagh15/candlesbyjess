from datetime import datetime
import smtplib

MY_EMAIL = "mjkavanagh7@yahoo.com"
MY_PASSWORD = "kpveodxtjriyxojn"

today = datetime.now()
today_tuple = (today.month, today.day)

def send_email():
    try:
        with smtplib.SMTP("smtp.mail.yahoo.com", port=587) as connection:
            connection.starttls()
            connection.login(MY_EMAIL, MY_PASSWORD)
            connection.sendmail(
                from_addr=MY_EMAIL,
                to_addrs="michael.j.kavanagh15@gmail.com",
                msg=f"Subject:Test!\n\nThis is a test"
            )
            print("message sent")
    except:
        print("and error with the email service occured")

send_email()