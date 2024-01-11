import Aluno from '../models/Aluno';

class HomeController {
  async index(request, response) {
    const novoAluno = await Aluno.create({
      nome: 'Jose',
      sobrenome: 'Santos',
      email: 'jose@gmail.com',
      idade: 49,
      peso: 72.0,
      altura: 1.90,
    });
    response.json(novoAluno);
  }
}

export default new HomeController();
