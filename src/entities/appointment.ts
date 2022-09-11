export interface AppointmentProps {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

class Appointment {
  private props: AppointmentProps;
  
  constructor (props: AppointmentProps) {
    const {startsAt, endsAt} = props;
    
    if (startsAt <= new Date()) {
      throw new Error('invalid start date');
    }
    
    if (endsAt <= startsAt) {
      throw new Error('invalid end date');
    }
    
    this.props = props;
  }
  
  get customer ()  {
    return this.props.customer;
  };
  
  get startsAt () {
    return this.props.startsAt;
  };
  
  get endsAt () {
    return this.props.endsAt;
  };
}

export {
  Appointment
}