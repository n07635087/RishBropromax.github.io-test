from flask import Flask, render_template, request, session, redirect, url_for
import os
from PIL import Image

app = Flask(__name__)
app.secret_key = "saheli"  # Replace with a strong secret key

def verify_password(password):
    # Replace 'your_password' with the actual password you want to use
    valid_password = 'saheli'
    return password == valid_password

@app.route("/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        password = request.form.get("password")
        if verify_password(password):
            session["logged_in"] = True
            return redirect(url_for("gallery"))
        else:
            return render_template("login.html", message="Invalid password")
    return render_template("login.html")

@app.route("/gallery")
def gallery():
    if not session.get("logged_in"):
        return redirect(url_for("login"))

    image_list = os.listdir("static/images")
    return render_template("gallery.html", images=image_list)

@app.route("/image/<string:image_name>")
def view_image(image_name):
    if not session.get("logged_in"):
        return redirect(url_for("login"))

    image_path = os.path.join("static/images", image_name)
    try:
        img = Image.open(image_path)
        img.show()
    except Exception as e:
        return f"Error displaying image: {e}"

if __name__ == "__main__":
    app.run(debug=True)
