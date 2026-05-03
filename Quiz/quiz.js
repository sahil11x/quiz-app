const quizData = {
  1: {
    name: "GK",
    questions: [
      {q:"What is the capital of India?",a:"Mumbai",b:"New Delhi",c:"Kolkata",d:"Chennai",ans:"b"},
      {q:"Who is known as the father of computers?",a:"Alan Turing",b:"Charles Babbage",c:"Bill Gates",d:"Steve Jobs",ans:"b"},
      {q:"Which planet is known as the Red Planet?",a:"Earth",b:"Mars",c:"Venus",d:"Jupiter",ans:"b"},
      {q:"Which is the largest ocean?",a:"Indian Ocean",b:"Atlantic Ocean",c:"Pacific Ocean",d:"Arctic Ocean",ans:"c"},
      {q:"Who wrote the National Anthem of India?",a:"Rabindranath Tagore",b:"Gandhi",c:"Nehru",d:"Subhash Bose",ans:"a"},
      {q:"Which is the national animal of India?",a:"Lion",b:"Elephant",c:"Tiger",d:"Leopard",ans:"c"},
      {q:"Which gas do plants absorb?",a:"Oxygen",b:"Carbon Dioxide",c:"Nitrogen",d:"Hydrogen",ans:"b"},
      {q:"Which country hosted FIFA 2022?",a:"Qatar",b:"Brazil",c:"Russia",d:"USA",ans:"a"},
      {q:"How many continents are there?",a:"5",b:"6",c:"7",d:"8",ans:"c"},
      {q:"Which is the longest river in the world?",a:"Amazon",b:"Nile",c:"Ganga",d:"Yangtze",ans:"b"}
    ]
  },
  2: {
    name: "English",
    questions: [
      {q:"Choose the correct spelling:",a:"Recieve",b:"Receive",c:"Receeve",d:"Recevie",ans:"b"},
      {q:"Synonym of 'Happy' is:",a:"Sad",b:"Angry",c:"Joyful",d:"Tired",ans:"c"},
      {q:"Antonym of 'Fast' is:",a:"Quick",b:"Slow",c:"Rapid",d:"Swift",ans:"b"},
      {q:"Plural of 'Child'?",a:"Childs",b:"Children",c:"Childrens",d:"Childes",ans:"b"},
      {q:"Choose correct article: ___ apple",a:"A",b:"An",c:"The",d:"No article",ans:"b"},
      {q:"Synonym of 'Big'",a:"Tiny",b:"Large",c:"Short",d:"Narrow",ans:"b"},
      {q:"Past tense of 'Go'",a:"Goed",b:"Gone",c:"Went",d:"Going",ans:"c"},
      {q:"Opposite of 'Hot'",a:"Cold",b:"Warm",c:"Boiling",d:"Heat",ans:"a"},
      {q:"Which is a noun?",a:"Run",b:"Beautiful",c:"Table",d:"Quickly",ans:"c"},
      {q:"Synonym of 'Smart'",a:"Clever",b:"Dull",c:"Lazy",d:"Slow",ans:"a"}
    ]
  },
  3: {
    name: "Aptitude",
    questions: [
      {q:"What is the result of 5 × 2?",a:"7",b:"10",c:"12",d:"15",ans:"b"},
      {q:"What is 20% of 200?",a:"20",b:"30",c:"40",d:"50",ans:"c"},
      {q:"15 + 25 = ?",a:"35",b:"40",c:"45",d:"50",ans:"b"},
      {q:"50 ÷ 5 = ?",a:"5",b:"10",c:"15",d:"20",ans:"b"},
      {q:"12 × 12 = ?",a:"124",b:"144",c:"132",d:"142",ans:"b"},
      {q:"100 - 45 = ?",a:"55",b:"65",c:"45",d:"60",ans:"a"},
      {q:"Square of 9?",a:"18",b:"72",c:"81",d:"90",ans:"c"},
      {q:"Cube of 3?",a:"6",b:"9",c:"27",d:"18",ans:"c"},
      {q:"10% of 500?",a:"50",b:"40",c:"60",d:"70",ans:"a"},
      {q:"7 × 8 = ?",a:"54",b:"56",c:"64",d:"48",ans:"b"}
    ]
  },
  4: {
    name: "Logical",
    questions: [
      {q:"Which number comes next: 2, 4, 6, 8 ?",a:"9",b:"10",c:"11",d:"12",ans:"b"},
      {q:"Find the odd one out:",a:"Dog",b:"Cat",c:"Lion",d:"Car",ans:"d"},
      {q:"5, 10, 15, 20, ?",a:"22",b:"25",c:"30",d:"35",ans:"b"},
      {q:"A is father of B. B is son of A. What is the relation?",a:"Brothers",b:"Father-Son",c:"Friends",d:"Uncle",ans:"b"},
      {q:"Which shape has 4 equal sides?",a:"Triangle",b:"Rectangle",c:"Square",d:"Circle",ans:"c"},
      {q:"If today is Monday, tomorrow will be?",a:"Sunday",b:"Tuesday",c:"Wednesday",d:"Friday",ans:"b"},
      {q:"Which is the smallest number?",a:"5",b:"2",c:"9",d:"7",ans:"b"},
      {q:"Which word is different?",a:"Apple",b:"Banana",c:"Car",d:"Mango",ans:"c"},
      {q:"1, 3, 5, 7, ?",a:"8",b:"9",c:"10",d:"11",ans:"b"},
      {q:"Which is not a color?",a:"Red",b:"Blue",c:"Dog",d:"Green",ans:"c"}
    ]
  }
};

let currentSubject, questions, currentIndex, score;

function startQuiz(id) {
  currentSubject = quizData[id];
  questions = currentSubject.questions;
  currentIndex = 0;
  score = 0;
  show("quiz-screen");
  document.getElementById("subject-label").textContent = currentSubject.name;
  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentIndex];
  document.getElementById("progress").textContent = `Q${currentIndex + 1} / ${questions.length}`;
  document.getElementById("question-text").textContent = `Q${currentIndex + 1}. ${q.q}`;

  const opts = document.getElementById("options");
  opts.innerHTML = "";
  ["a","b","c","d"].forEach(key => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = `${key.toUpperCase()}) ${q[key]}`;
    btn.onclick = () => selectAnswer(key, q.ans);
    opts.appendChild(btn);
  });

  document.getElementById("next-btn").classList.add("hidden");
}

function selectAnswer(selected, correct) {
  document.querySelectorAll(".option-btn").forEach((btn, i) => {
    const key = ["a","b","c","d"][i];
    btn.disabled = true;
    if (key === correct) btn.classList.add("correct");
    else if (key === selected) btn.classList.add("wrong");
  });

  if (selected === correct) score++;
  document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const total = questions.length;
  const pct = ((score / total) * 100).toFixed(1);
  const emoji = pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "😅";

  document.getElementById("result-emoji").textContent = emoji;
  document.getElementById("score-text").textContent = `Score: ${score} / ${total}`;
  document.getElementById("percentage-text").textContent = `Percentage: ${pct}%`;
  show("result-screen");
}

function restart() { show("subject-screen"); }

function show(id) {
  ["subject-screen","quiz-screen","result-screen"].forEach(s =>
    document.getElementById(s).classList.add("hidden")
  );
  document.getElementById(id).classList.remove("hidden");
}
