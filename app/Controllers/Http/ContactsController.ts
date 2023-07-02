// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Contact from "App/Models/Contact";

export default class ContactsController {


    /**
     * @desciption: This method is used to create a new contact
     */

    public async create({ request, response }) {
        try {

            const data = request.only(['phoneNumber', 'email', 'linkedId', 'linkPrecedence']);
            console.log(data);
            const contact = await Contact.create(data);
            return response.status(200).json({
                message: 'Contact created successfully',
                data: contact
            });

        } catch (error) {
            console.log(error);
            return response.status(500).json({
                message: 'An error occured',
            });
        }
    }

}
