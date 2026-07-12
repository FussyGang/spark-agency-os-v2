export interface HubspotDeal {

    id:string;

    properties:{

        dealname:string;

        dealstage:string;

        amount:string;

    }

}

export interface HubspotContact{

    id:string;

    properties:{

        firstname:string;

        lastname:string;

        email:string;

        phone:string;

    }

}