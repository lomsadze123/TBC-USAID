class AccordionModel {
  constructor(id, question, intro, answer, stages, isOpen) {
    this.id = id;
    this.question = question;
    this.intro = intro;
    this.answer = answer;
    this.stages = stages;
    this.isOpen = isOpen;
  }

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
}

export default AccordionModel;
