
class MeetingModel {
    public id: number;
    public teamId: number;
    public startTime: string;
    public endTime: string;
    public description: string;
    public room: string;


    public static teamValidation = {

        required: { value: true, message: "Team is required" }
    }

    public static startTimeValidation = {

        required: { value: true, message: "Start Time is required" },
        min: { value: new Date().toLocaleString(), message: "You have chosen an old date!" }
    }


    public static endTimeValidation = {

        required: { value: true, message: "End Time is required" }
    }


    public static descriptionValidation = {

        required: { value: true, message: "Description is required" },
        minLength: { value: 2, message: "Description Must be more then 1 Charecter" },
        maxLength: { value: 150, message: "Description Must be less then 150 Characters" }
    }

    public static roomValidation = {

        required: { value: true, message: "Room is required" },

    }

}

export default MeetingModel;