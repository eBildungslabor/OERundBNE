// Liste der Vorschläge
const suggestions = [
  "Wie wäre es, den Lernenden die Möglichkeit zu geben, ihren eigenen Lernweg und Arbeitsplan zu gestalten, um ihre Selbstorganisation zu fördern?",
  "Wie wäre es, regelmäßig Lernpartnerschaften zu bilden, in denen sich die Lernenden gegenseitig unterstützen und motivieren?",
  "Wie wäre es, kreative Aufgaben wie das Erstellen von Mindmaps, Collagen oder Sketchnotes einzubinden, um verschiedene Ausdrucksformen zu fördern?",
  "Wie wäre es, Reflexionsrunden am Ende einer Lerneinheit einzubauen, bei denen die Lernenden in kleinen Gruppen über ihre Erkenntnisse sprechen?",
  "Wie wäre es, Lernende durch regelmäßige 'Check-ins' zu motivieren, bei denen sie kurz über ihren aktuellen Lernstand berichten?",
  "Wie wäre es, Peer-Teaching als festen Bestandteil des Unterrichts einzubauen, sodass Lernende die Rolle des Lehrenden einnehmen und Inhalte erklären?",
  "Wie wäre es, Aufgaben so zu gestalten, dass Lernende auf kreative Art und Weise Probleme lösen, z.B. durch Rollenspiele oder Simulationen?",
  "Wie wäre es, den Lernort Schule um Museen, Bibliotheken und weitere außerschulische Lernorte zu ergänzen, wo Lernende eigenständig Forschungen anstellen können?",
  "Wie wäre es, den Lernenden Wahlmöglichkeiten bei den Themen und Aufgaben zu lassen, um mehr persönliche Relevanz zu schaffen?",
  "Wie wäre es, regelmäßig kurze Pausen für Bewegung oder Achtsamkeit einzubauen, um das Wohlbefinden der Lernenden zu fördern und die Konzentration zu steigern?",
  "Wie wäre es, Diskussionen in kleineren Gruppen zu führen, um stilleren Lernenden mehr Raum zum Sprechen zu geben?",
  "Wie wäre es, regelmäßig das Silent Writing einzubauen, um allen die Möglichkeit zu geben, die eigenen Gedanken in Ruhe zu formulieren?",
  "Wie wäre es, Lernende selbst Präsentationen oder kurze Inputs zu bestimmten Themen erstellen zu lassen, anstatt dass die lehrende Person alles präsentiert?",
  "Wie wäre es, die Lernenden bei der Gestaltung der Lernziele mit einzubeziehen, damit sie mehr Verantwortung für ihren Lernprozess übernehmen?",
  "Wie wäre es, regelmäßig Reflexionsphasen einzuplanen, in denen die Lernenden ihren Fortschritt und ihre Herausforderungen selbst evaluieren?",
  "Wie wäre es, Lernende regelmäßig in unterschiedliche Rollen (z.B. Moderator, Zeitwächter, Schriftführer) zu versetzen, um verschiedene Perspektiven zu fördern?",
  "Wie wäre es, Lernende herauszufordern, sich gegenseitig in einer „Fach-Expert*innen-Runde“ bestimmte Inhalte zu erklären, um Wissen zu festigen?",
  "Wie wäre es, Lernende eigene Quizfragen zu einem Thema entwickeln zu lassen, die dann in der Gruppe beantwortet werden?",
  "Wie wäre es, anstelle von Tests oder Klausuren projektbasierte Arbeiten als Leistungsnachweis anzubieten?",
  "Wie wäre es, Lernende über ihre Erfahrungen und Erkenntnisse in Form von Blogs oder Video-Tagebüchern reflektieren zu lassen?",
  "Wie wäre es, den Lernprozess durch Peer-Feedback zu begleiten, sodass die Lernenden regelmäßig Rückmeldung von ihren Mitlernenden erhalten?",
  "Wie wäre es, den Unterricht in Form von Lernstationen zu gestalten, an denen die Lernenden im eigenen Tempo verschiedene Aufgaben durchlaufen können?",
  "Wie wäre es, die Lernenden regelmäßig mit realen Problemstellungen (Problem-based Learning) zu konfrontieren, die sie in Gruppen lösen müssen?",
  "Wie wäre es, regelmäßige „Lernkonferenzen“ zu organisieren, bei denen Lernende ihre Ergebnisse der Gruppe präsentieren und gemeinsam besprochen werden?",
  "Wie wäre es, stärker auf interaktive Methoden wie Debatten oder Fishbowl-Diskussionen zu setzen, um den Austausch zu fördern?",
  "Wie wäre es, Zeit für Selbstreflexion einzuräumen, in der die Lernenden ihre Fortschritte und Lernwege dokumentieren (z.B. in Lerntagebüchern)?",
  "Wie wäre es, Lernende dazu zu ermutigen, selbst Fragen zu formulieren und den Lernprozess mitzugestalten?",
  "Wie wäre es, verstärkt auf das Peer-to-Peer Lernen (= das Lernen untereinander) zu setzen, anstatt Inhalte als lehrende Person weiterzugeben?",
  "Wie wäre es, Inhalte im Vorfeld (= als flipped Materialien) zur Verfügung zu stellen und dann Raum für Austausch zu haben?",
  "Wie wäre es, Lernende zu selbstgewählten Fragen/ Themen forschen zu lassen anstatt Themen vorzugeben?",
  "Wie wäre es, nach dem Stellen einer Frage erst eine kurze Murmelrunde einzuplanen, so dass alle Zeit zur Reflexion haben und dann gleichberechtigtere Beteiligung möglich ist?",
  "Wie wäre es, Lernende durch offene Fragen anzuregen, über komplexe Themen zu diskutieren und ihre Meinungen zu verteidigen?",
  "Wie wäre es, das Lernen durch praktische Projekte zu vertiefen, bei denen Lernende reale Probleme oder Fragestellungen bearbeiten?",
  "Wie wäre es, Lernende in wechselnden Teams arbeiten zu lassen, um den Austausch zwischen verschiedenen Perspektiven zu fördern?",
  "Wie wäre es, die Lernenden dazu anzuregen, ihr eigenes Lernportfolio zu erstellen, um ihre Fortschritte sichtbar zu machen?",
  "Wie wäre es, den Lernprozess durch Reflexionsfragen regelmäßig zu unterbrechen, um den Lernenden bewusst zu machen, was sie gelernt haben und was sie noch brauchen?"
];

// Funktion, um einen zufälligen Vorschlag anzuzeigen
function generateSuggestion() {
  const randomIndex = Math.floor(Math.random() * suggestions.length);
  document.getElementById("suggestion").innerHTML = suggestions[randomIndex];
}
