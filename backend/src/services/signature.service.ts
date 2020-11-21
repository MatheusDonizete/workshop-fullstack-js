import Signature from '../models/Signature';

class SignatureService {
    async findAll() {
      const signatures = await Signature.findAll();
      return signatures;
    }

    async find(name: string) {
      const signature = await Signature.findOne({
        where: { name },
      });

      return signature;
    }

    async create(data: { name: string, cost: number, dueDate: Date, imageURL: string }) {
      const signature = Signature.build(data);
      await signature.save();
      return signature;
    }

    async update(data: { name: string, cost: number, dueDate: Date, imageURL: string }) {
      const signature = await Signature.update(data, { where: { name: data.name, } });
      return signature;
    }

    async destroy(name: string) {
      await Signature.destroy({
        where: { 
          name
        }
      });
    }
}

export default new SignatureService();
