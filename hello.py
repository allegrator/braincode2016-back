import os
from flask import Flask , request, redirect, url_for, jsonify
from werkzeug import secure_filename
from classify_image import computeName

app = Flask(__name__)

UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS


@app.route("/")
def hello():
    return "Hello World!"

@app.route("/compute", methods=["POST"])
def compute():
    file = request.files['img']
    if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(path)
            os.system("./imgcat.sh " + path)
            result = computeName(path)
            print(result)
            return jsonify(**result)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=1)