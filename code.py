quiz_data = {
    1: {
        "name": "GK",
        "questions": [
            {"q_no":1,"question":"What is the capital of India?","a":"Mumbai","b":"New Delhi","c":"Kolkata","d":"Chennai","answer":"b"},
            {"q_no":2,"question":"Who is known as the father of computers?","a":"Alan Turing","b":"Charles Babbage","c":"Bill Gates","d":"Steve Jobs","answer":"b"},
            {"q_no":3,"question":"Which planet is known as the Red Planet?","a":"Earth","b":"Mars","c":"Venus","d":"Jupiter","answer":"b"},
            {"q_no":4,"question":"Which is the largest ocean?","a":"Indian Ocean","b":"Atlantic Ocean","c":"Pacific Ocean","d":"Arctic Ocean","answer":"c"},
            {"q_no":5,"question":"Who wrote the National Anthem of India?","a":"Rabindranath Tagore","b":"Gandhi","c":"Nehru","d":"Subhash Bose","answer":"a"},
            {"q_no":6,"question":"Which is the national animal of India?","a":"Lion","b":"Elephant","c":"Tiger","d":"Leopard","answer":"c"},
            {"q_no":7,"question":"Which gas do plants absorb?","a":"Oxygen","b":"Carbon Dioxide","c":"Nitrogen","d":"Hydrogen","answer":"b"},
            {"q_no":8,"question":"Which country hosted FIFA 2022?","a":"Qatar","b":"Brazil","c":"Russia","d":"USA","answer":"a"},
            {"q_no":9,"question":"How many continents are there?","a":"5","b":"6","c":"7","d":"8","answer":"c"},
            {"q_no":10,"question":"Which is the longest river in the world?","a":"Amazon","b":"Nile","c":"Ganga","d":"Yangtze","answer":"b"}
        ]
    },

    2: {
        "name": "ENGLISH",
        "questions": [
            {"q_no":1,"question":"Choose the correct spelling:","a":"Recieve","b":"Receive","c":"Receeve","d":"Recevie","answer":"b"},
            {"q_no":2,"question":"Synonym of 'Happy' is:","a":"Sad","b":"Angry","c":"Joyful","d":"Tired","answer":"c"},
            {"q_no":3,"question":"Antonym of 'Fast' is:","a":"Quick","b":"Slow","c":"Rapid","d":"Swift","answer":"b"},
            {"q_no":4,"question":"Plural of 'Child'?","a":"Childs","b":"Children","c":"Childrens","d":"Childes","answer":"b"},
            {"q_no":5,"question":"Choose correct article: ___ apple","a":"A","b":"An","c":"The","d":"No article","answer":"b"},
            {"q_no":6,"question":"Synonym of 'Big'","a":"Tiny","b":"Large","c":"Short","d":"Narrow","answer":"b"},
            {"q_no":7,"question":"Past tense of 'Go'","a":"Goed","b":"Gone","c":"Went","d":"Going","answer":"c"},
            {"q_no":8,"question":"Opposite of 'Hot'","a":"Cold","b":"Warm","c":"Boiling","d":"Heat","answer":"a"},
            {"q_no":9,"question":"Which is a noun?","a":"Run","b":"Beautiful","c":"Table","d":"Quickly","answer":"c"},
            {"q_no":10,"question":"Synonym of 'Smart'","a":"Clever","b":"Dull","c":"Lazy","d":"Slow","answer":"a"}
        ]
    },

    3: {
        "name": "APTITUDE",
        "questions": [
            {"q_no":1,"question":"What is the result of 5 × 2?","a":"7","b":"10","c":"12","d":"15","answer":"b"},
            {"q_no":2,"question":"What is 20% of 200?","a":"20","b":"30","c":"40","d":"50","answer":"c"},
            {"q_no":3,"question":"15 + 25 = ?","a":"35","b":"40","c":"45","d":"50","answer":"b"},
            {"q_no":4,"question":"50 ÷ 5 = ?","a":"5","b":"10","c":"15","d":"20","answer":"b"},
            {"q_no":5,"question":"12 × 12 = ?","a":"124","b":"144","c":"132","d":"142","answer":"b"},
            {"q_no":6,"question":"100 - 45 = ?","a":"55","b":"65","c":"45","d":"60","answer":"a"},
            {"q_no":7,"question":"Square of 9?","a":"18","b":"72","c":"81","d":"90","answer":"c"},
            {"q_no":8,"question":"Cube of 3?","a":"6","b":"9","c":"27","d":"18","answer":"c"},
            {"q_no":9,"question":"10% of 500?","a":"50","b":"40","c":"60","d":"70","answer":"a"},
            {"q_no":10,"question":"7 × 8 = ?","a":"54","b":"56","c":"64","d":"48","answer":"b"}
        ]
    },

    4: {
        "name": "LOGICAL",
        "questions": [
            {"q_no":1,"question":"Which number comes next: 2,4,6,8 ?","a":"9","b":"10","c":"11","d":"12","answer":"b"},
            {"q_no":2,"question":"Find the odd one out:","a":"Dog","b":"Cat","c":"Lion","d":"Car","answer":"d"},
            {"q_no":3,"question":"5,10,15,20, ?","a":"22","b":"25","c":"30","d":"35","answer":"b"},
            {"q_no":4,"question":"A is father of B. B is son of A. What is relation?","a":"Brothers","b":"Father-Son","c":"Friends","d":"Uncle","answer":"b"},
            {"q_no":5,"question":"Which shape has 4 equal sides?","a":"Triangle","b":"Rectangle","c":"Square","d":"Circle","answer":"c"},
            {"q_no":6,"question":"If today is Monday, tomorrow will be?","a":"Sunday","b":"Tuesday","c":"Wednesday","d":"Friday","answer":"b"},
            {"q_no":7,"question":"Which is the smallest number?","a":"5","b":"2","c":"9","d":"7","answer":"b"},
            {"q_no":8,"question":"Which word is different?","a":"Apple","b":"Banana","c":"Car","d":"Mango","answer":"c"},
            {"q_no":9,"question":"1,3,5,7, ?","a":"8","b":"9","c":"10","d":"11","answer":"b"},
            {"q_no":10,"question":"Which is not a color?","a":"Red","b":"Blue","c":"Dog","d":"Green","answer":"c"}
        ]
    }
}

print("Welcome to the Quiz App ")
print("Please choose a category:")
print("1. GK")
print("2. ENGLISH")
print("3. APTITUDE")
print("4. LOGICAL")

choice = int(input("Enter your choice: "))
score = 0

if choice in quiz_data:
    print(f"\nYou chose the {quiz_data[choice]['name']} Quiz\n")

    for q in quiz_data[choice]["questions"]:
        print(f"Q{q['q_no']}. {q['question']}")
        print("a)", q["a"])
        print("b)", q["b"])
        print("c)", q["c"])
        print("d)", q["d"])

        user_answer = input("Your answer (a/b/c/d): ").lower().strip()

        if user_answer == q["answer"]:
            score += 1
            print("Correct\n")
        else:
            print("Wrong\n")

    print("Quiz Completed")

    total_questions = len(quiz_data[choice]["questions"])
    percentage = (score / total_questions) * 100

    print(f"Your final score is: {score}/{total_questions}")
    print(f"Your percentage is: {percentage:.2f}%")

else:
    print("\nInvalid choice! Please restart and select a valid option.")