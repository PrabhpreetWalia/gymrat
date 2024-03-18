import math
from flask import Flask, jsonify, request

app = Flask(__name__)

news_data = [
  {
    "headline": "New Gym Equipment Arrives!",
    "content": "Exciting news! We've just received a shipment of state-of-the-art gym equipment. Come check it out and take your workouts to the next level!",
    "date": "12/03/2024"
  },
  {
    "headline": "Yoga Class Schedule Update",
    "content": "Attention yogis! We've updated our yoga class schedule with new sessions and instructors. Whether you're a beginner or advanced practitioner, we have a class for you!",
    "date": "11/03/2024"
  },
  {
    "headline": "Special Offer: Personal Training Sessions",
    "content": "Take advantage of our limited-time offer on personal training sessions! Our certified trainers will create personalized workout plans to help you reach your fitness goals faster.",
    "date": "10/03/2024"
  },
  {
    "headline": "Nutrition Workshop Series",
    "content": "Join us for our nutrition workshop series where you'll learn about the importance of nutrition for optimal health and fitness. Discover practical tips for fueling your body and enhancing your performance.",
    "date": "09/03/2024"
  },
  {
    "headline": "Group Fitness Challenge",
    "content": "Get ready to challenge yourself and compete with fellow gym members in our group fitness challenge! Work together to achieve fitness milestones and win exciting prizes.",
    "date": "08/03/2024"
  },
  {
    "headline": "New Gym Membership Packages",
    "content": "We've introduced new membership packages to suit your fitness needs and budget. Whether you prefer individual workouts or group classes, we have a membership option for you!",
    "date": "07/03/2024"
  },
  {
    "headline": "Fitness Bootcamp Registration Now Open",
    "content": "Sign up now for our upcoming fitness bootcamp and kickstart your journey to a healthier you! Our intensive workout program is designed to challenge and inspire you.",
    "date": "06/03/2024"
  },
  {
    "headline": "Outdoor Yoga Session",
    "content": "Enjoy the fresh air and sunshine in our outdoor yoga session! Connect with nature as you practice yoga poses and meditation techniques.",
    "date": "05/03/2024"
  },
  {
    "headline": "Healthy Cooking Class",
    "content": "Learn how to prepare delicious and nutritious meals in our healthy cooking class. Our culinary experts will teach you valuable cooking skills and share healthy recipes.",
    "date": "04/03/2024"
  },
  {
    "headline": "Gym Renovation Announcement",
    "content": "We're excited to announce that our gym will undergo renovation to create a more modern and comfortable workout environment. Stay tuned for updates on the renovation progress!",
    "date": "03/03/2024"
  },
  {
    "headline": "Wellness Seminar",
    "content": "Attend our wellness seminar and gain insights into holistic health practices. Discover how to balance your physical, mental, and emotional well-being for a fulfilling life.",
    "date": "02/03/2024"
  },
  {
    "headline": "Gym Closed for Maintenance",
    "content": "Please note that our gym will be closed for maintenance on [date]. We apologize for any inconvenience and appreciate your understanding.",
    "date": "01/03/2024"
  },
  {
    "headline": "Gym Closed for Maintenance",
    "content": "Please note that our gym will be closed for maintenance on [date]. We apologize for any inconvenience and appreciate your understanding.",
    "date": "01/03/2024"
  }
]

@app.route("/news")
def news():
    count_news = int(request.args.get('num'))
    page_number = int(request.args.get('page', default=1))
    print(count_news, page_number)
    if count_news == -1:
        starting_index = 6*(page_number-1)
        return jsonify(news_data[starting_index:starting_index+6])
    
    return jsonify(news_data[:count_news])

@app.route("/count-news")
def count_news():
    return '{"pageCount": "' + str(math.ceil((len(news_data)/6))) + '"}'

if(__name__ == "__main__"):
    app.run(debug=True)