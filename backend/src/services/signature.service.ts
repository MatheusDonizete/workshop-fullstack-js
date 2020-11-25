import Signature from '../models/Signature';

type incomingData = { id?: number, name: string, cost: number, dueDate: Date, imageURL: string };
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

    async create(data: incomingData) {
      const signature = Signature.build(data);
      await signature.save();
      return signature;
    }

    async update(data: incomingData) {
      const signature = await Signature.update(data, { where: { id: data.id, } });
      return signature;
    }

    async save(data: incomingData) {
      if (data.id) {
        return await this.update(data);
      }

      return await this.create(data);
    }

    async destroy(id: number) {
      await Signature.destroy({
        where: { 
          id
        }
      });
    }
}

export default new SignatureService();
