import Aluno from '../models/Aluno';

class AlunoController {
  async index(request, response) {
    const alunos = await Aluno.findAll();
    response.json(alunos);
  }
}

export default new AlunoController();
