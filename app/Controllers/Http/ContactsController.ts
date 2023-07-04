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

    public async getResult({ request, response }) {
        try {
            const data = request.only(['phoneNumber', 'email']);

            if (data.phoneNumber) {
                var userData = await Contact.query().where('phoneNumber', data.phoneNumber).where('linkPrecedence', 'primary').first();
            } else {
                var userData = await Contact.query().where('email', data.email).where('linkPrecedence', 'primary').first();
            }

            if (userData) {
                var firstID = userData.id;
                var firstNumber = userData.phoneNumber;
                var firstEmail = userData.email;
            } else {

                return response.status(404).json({
                    message: 'No contact found',
                });
            }

            const remainingData = await Contact.query().where('linked_id', firstID).where('linkPrecedence', 'secondary')

            //    get email and id of remaining data in an array
            var emailArray = [firstEmail];
            var phoneArray = [firstNumber];
            var idArray: number[] = [];

            remainingData.forEach(element => {
                if (element.email) {
                    emailArray.push(element.email);
                }
                if (element.phoneNumber !== undefined) {
                    phoneArray.push(element.phoneNumber);
                }

                if (element.id) {
                    idArray.push(element.id);
                }
            });

        } catch (error) {
            console.log(error);
            return response.status(500).json({
                message: 'An error occured',
            });
        }

        return response.status(200).json({
            contact: {
                'primaryContatctId' : firstID,
                'emails': emailArray,
                'phoneNumbers': phoneArray,
                'secondaryContactIds': idArray
            }
        });
    }

}
