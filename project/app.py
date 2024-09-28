from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
import random

app = Flask(__name__)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:newpassword@localhost:5432/daiict'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Book model
class Book(db.Model):
    __tablename__ = 'books'
    book_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    author = db.Column(db.String(255))
    description = db.Column(db.Text)
    category = db.Column(db.String(100))
    image_url = db.Column(db.String(255))

# Home route (displays random books)
@app.route('/')
def home():
    # Fetch a random selection of books (let's say 5 random books)
    books = Book.query.order_by(db.func.random()).limit(5).all()
    return render_template('home.html', books=books)

if __name__ == '__main__':
    app.run(debug=True)
