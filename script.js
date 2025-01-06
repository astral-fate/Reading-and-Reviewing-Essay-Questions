const essays = [
    {
        number: 1,
        title: "Extensive Reading and Literature Review",
        question: "Explain the importance of extensive reading and reviewing the literature in the research process. Provide specific examples of repositories and databases that researchers can use.",
        answer: `Extensive reading and reviewing the literature are critical for understanding the current state of knowledge, identifying gaps, and formulating a research problem. Repositories like Google Scholar, Scopus, and Web of Science provide access to peer-reviewed articles, while databases like ACM Digital Library and IEEE Xplore offer specialized resources. For example, Google Scholar allows researchers to track citations and find related work, while IEEE Xplore provides access to cutting-edge research in engineering and computer science.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 2,
        title: "Measures of Good Research",
        question: "Discuss the measures of good research, including originality and validity. How do these measures contribute to the impact of a research study?",
        answer: `Good research is systematic, logical, empirical, and replicable. Originality ensures the research addresses novel or interesting problems, while validity ensures the findings are verified through proof, analysis, or experimentation. For example, a study introducing a new algorithm for image classification must demonstrate its novelty (originality) and validate its performance through experiments (validity). These measures enhance the research's impact by contributing to the field and influencing future studies.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 3,
        title: "Conferences vs Journals",
        question: "Compare and contrast the roles of conferences and journals in disseminating research. Which is more impactful, and why?",
        answer: `Conferences disseminate research quickly and provide opportunities for feedback and networking, while journals offer rigorous peer review and wider readership. Journals are generally more impactful due to their prestige and long-term accessibility. For example, a paper published in a top-tier journal like *Nature* has a broader audience and higher citation potential than a conference paper, even though conferences like NeurIPS are highly respected in specific fields.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 4,
        title: "Finding and Evaluating Research Papers",
        question: "Explain the process of finding and evaluating research papers. What strategies can researchers use to narrow or widen their search results?",
        answer: `Researchers can use keywords, boolean operators (AND, OR, NOT), and filters (e.g., publication date, language) to refine searches. For a narrow search, specific terms like "deep learning for medical imaging" are used, while a wide search might include broader terms like "machine learning." Tools like Google Scholar and Scopus help identify relevant papers, and researchers must evaluate them based on relevance, quality, and citations.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 5,
        title: "Reproducibility and Replicability",
        question: "What is the significance of reproducibility and replicability in scientific research? How do journals encourage these practices?",
        answer: `Reproducibility and replicability ensure that research findings are reliable and can be independently verified. Journals encourage these practices by requiring authors to share data, code, and detailed methodologies. For example, the journal *Nature* mandates that authors provide sufficient information for others to replicate their experiments, enhancing the credibility of the research.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 6,
        title: "Types of Research Publications",
        question: "Describe the different types of research publications (e.g., technical reports, conference papers, journal articles). What are the advantages and disadvantages of each?",
        answer: `Technical reports provide detailed methodologies but lack peer review. Conference papers offer rapid dissemination and feedback but may have limited impact. Journal articles undergo rigorous peer review and have long-term visibility but take longer to publish. For example, a technical report might be useful for sharing preliminary results, while a journal article is better for establishing a significant contribution to the field.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 7,
        title: "Impact Factor of Journals",
        question: "How does the impact factor of a journal influence its reputation and the perception of research published in it? Provide examples of high-impact journals in computer science.",
        answer: `The impact factor measures the average number of citations to articles published in a journal, reflecting its influence. High-impact journals like *IEEE Transactions on Pattern Analysis and Machine Intelligence* (TPAMI) are highly regarded, and publishing in them enhances a researcher's reputation. For example, a paper in TPAMI is likely to be cited more frequently than one in a lower-impact journal.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 8,
        title: "H-Index",
        question: "What is the H-index, and how is it used to evaluate researchers, journals, and institutions? Provide an example of how it is calculated.",
        answer: `The H-index measures the productivity and impact of a researcher based on their most cited papers. A researcher with an H-index of 10 has 10 papers with at least 10 citations each. It is also used to evaluate journals and institutions. For example, a university with a high H-index indicates that its researchers are producing influential work.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 9,
        title: "Theoretical, Empirical, and Exploratory Research",
        question: "Discuss the differences between theoretical, empirical, and exploratory research in computer science. Provide examples of each type.",
        answer: `Theoretical research involves proving theorems and developing algorithms (e.g., P vs. NP problem). Empirical research relies on experiments and data analysis (e.g., evaluating a new machine learning model). Exploratory research investigates new areas without prior hypotheses (e.g., applying AI to a novel domain like agriculture). Each type contributes uniquely to advancing knowledge in computer science.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 10,
        title: "Structure of a Research Paper",
        question: "Explain the structure of a research paper and the purpose of each section. How does the abstract differ from the introduction?",
        answer: `A research paper typically includes a title, abstract, introduction, related work, methodology, results, discussion, and references. The abstract summarizes the entire paper, while the introduction provides context and outlines the research problem. For example, the abstract of a paper on image denoising might briefly describe the method and results, while the introduction explains why denoising is important and how the study addresses existing challenges.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 11,
        title: "Choosing Keywords for Literature Search",
        question: "What are the key considerations when choosing keywords for a literature search? How can researchers optimize their search strategies?",
        answer: `Keywords should be specific, relevant, and include synonyms or alternative spellings. Researchers can use boolean operators (AND, OR, NOT) and filters to refine searches. For example, searching for "machine learning AND healthcare" yields more targeted results than "machine learning." Tools like Google Scholar's advanced search help optimize strategies.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 12,
        title: "Literature Databases vs Web Search Engines",
        question: "How do literature databases like Scopus and Web of Science differ from general web search engines like Google Scholar? What are the advantages of using specialized databases?",
        answer: `Literature databases like Scopus and Web of Science provide curated, high-quality content with citation tracking, while Google Scholar offers broader but less filtered results. Specialized databases are advantageous for accessing peer-reviewed articles and tracking research trends. For example, Scopus covers 14,000 journals, making it a reliable source for comprehensive literature reviews.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 13,
        title: "Role of a Research Advisor",
        question: "Discuss the role of a research advisor in the research process. What qualities should a researcher look for in an advisor?",
        answer: `A research advisor guides the formulation of research problems, provides feedback, and helps navigate the publication process. A good advisor should have expertise in the field, a strong publication record, and effective communication skills. For example, an advisor with experience in AI research can provide valuable insights for a student working on deep learning.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 14,
        title: "Evaluating Research Papers",
        question: "What are the challenges of evaluating the quality of research papers? How can researchers ensure they are citing credible and relevant sources?",
        answer: `Challenges include distinguishing high-quality papers from low-quality ones and avoiding bias. Researchers can evaluate papers based on the reputation of the journal or conference, the author's credentials, and the rigor of the methodology. For example, a paper published in a top-tier journal with a high impact factor is likely to be credible.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 15,
        title: "Something Different in Research",
        question: "Explain the concept of 'something different' in research. How does it contribute to the advancement of knowledge in a field?",
        answer: `"Something different" refers to proposing a new approach or application to a well-studied problem. It contributes by offering alternative solutions and expanding the scope of research. For example, applying blockchain technology to supply chain management introduces a novel approach to an existing problem, potentially leading to new insights and innovations.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 16,
        title: "Related Work Section",
        question: "What is the significance of the 'related work' section in a research paper? How does it help establish the originality of the study?",
        answer: `The "related work" section acknowledges previous research and highlights gaps that the current study addresses. It establishes originality by demonstrating how the study builds on or differs from existing work. For example, a paper on image classification might cite prior methods and explain how the proposed approach improves accuracy or efficiency.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 17,
        title: "Reproducibility and Replicability",
        question: "How can researchers ensure their work is reproducible and replicable? What role do journals and conferences play in promoting these practices?",
        answer: `Researchers can ensure reproducibility by providing detailed methodologies, data, and code. Journals and conferences promote these practices by requiring authors to share supplementary materials. For example, the ACM Digital Library encourages authors to upload datasets and code to facilitate replication.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 18,
        title: "Future Work Section",
        question: "Discuss the importance of the 'future work' section in a research paper. How does it guide subsequent research in the field?",
        answer: `The "future work" section outlines potential directions for further research, helping to guide the field's development. It identifies unresolved issues and suggests new approaches. For example, a paper on natural language processing might propose exploring multilingual models, inspiring future studies in that area.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 19,
        title: "Ethical Considerations in Research",
        question: "What are the ethical considerations in authorship and citation practices? How can researchers avoid issues like plagiarism and misattribution?",
        answer: `Ethical considerations include giving proper credit to all contributors and avoiding plagiarism. Researchers should cite sources accurately and ensure that all authors meet the criteria for authorship. For example, using tools like Turnitin can help detect unintentional plagiarism, while clear communication among co-authors prevents misattribution.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    },
    {
        number: 20,
        title: "Theoretical vs Applied Research",
        question: "How does the structure of a research paper vary between theoretical and applied research in computer science? Provide examples of each type.",
        answer: `Theoretical research papers typically include definitions, theorems, and proofs, while applied research papers focus on system architecture, implementation, and evaluation. For example, a theoretical paper on algorithm complexity might present a new proof, while an applied paper on autonomous vehicles might describe a new navigation system and its performance in simulations.`,
        rubric: [
            "Comprehensiveness of coverage (5 points)",
            "Accuracy of information (5 points)",
            "Use of specific examples (5 points)",
            "Discussion of integration/complementarity (5 points)"
        ]
    }
];

let currentEssayIndex = 0;
let showAnswer = false;

const questionNumberElement = document.getElementById('question-number');
const questionTitleElement = document.getElementById('question-title');
const questionTextElement = document.getElementById('question-text');
const answerTextElement = document.getElementById('answer-text');
const rubricListElement = document.getElementById('rubric-list');
const toggleAnswerButton = document.getElementById('toggle-answer');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const answerBoxElement = document.getElementById('answer-box');

function loadEssay(index) {
    const essay = essays[index];
    questionNumberElement.textContent = essay.number;
    questionTitleElement.textContent = essay.title;
    questionTextElement.textContent = essay.question;
    answerTextElement.textContent = essay.answer;
    rubricListElement.innerHTML = essay.rubric.map(criterion => `<li>${criterion}</li>`).join('');
    answerBoxElement.classList.add('hidden');
    toggleAnswerButton.textContent = 'Show Model Answer';
    showAnswer = false;
}

function toggleAnswer() {
    showAnswer = !showAnswer;
    answerBoxElement.classList.toggle('hidden', !showAnswer);
    toggleAnswerButton.textContent = showAnswer ? 'Hide Model Answer' : 'Show Model Answer';
}

function nextEssay() {
    if (currentEssayIndex < essays.length - 1) {
        currentEssayIndex++;
        loadEssay(currentEssayIndex);
    }
}

function previousEssay() {
    if (currentEssayIndex > 0) {
        currentEssayIndex--;
        loadEssay(currentEssayIndex);
    }
}

toggleAnswerButton.addEventListener('click', toggleAnswer);
prevButton.addEventListener('click', previousEssay);
nextButton.addEventListener('click', nextEssay);

// Load the first essay on page load
loadEssay(currentEssayIndex);
