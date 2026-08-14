(() => {
  const readerWords = [...document.querySelectorAll(".reader-word")];
  const lookup = document.querySelector("#reader-lookup");
  const lookupWord = document.querySelector("#lookup-word");
  const lookupTranscription = document.querySelector("#lookup-transcription");
  const lookupTranslation = document.querySelector("#lookup-translation");

  if (!readerWords.length || !lookup || !lookupWord || !lookupTranscription || !lookupTranslation) {
    return;
  }

  const showDefinition = (selectedWord) => {
    readerWords.forEach((word) => {
      const isSelected = word === selectedWord;
      word.classList.toggle("is-active", isSelected);
      word.setAttribute("aria-pressed", String(isSelected));
    });

    lookupWord.textContent = selectedWord.dataset.word;
    lookupTranscription.textContent = selectedWord.dataset.transcription;
    lookupTranslation.textContent = selectedWord.dataset.translation;
    lookup.classList.add("is-active");
  };

  readerWords.forEach((word) => {
    word.addEventListener("click", () => showDefinition(word));
  });
})();
