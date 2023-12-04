from flask import Flask, render_template, request

# Initialize Flask
app = Flask(
    __name__, 
    static_folder="static", 
    static_url_path="/static"
)

@app.route("/")
def index():
    return render_template("index.html")