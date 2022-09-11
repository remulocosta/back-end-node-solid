import { Appointment } from '../entities/appointment';
import { AppointmentRepository } from '../repositories/appointments-repository';

interface CreateAppointmentRequest {
  customer: string;
  startsAt: Date;
  endsAt: Date;
};

type CreateAppointmentResponse = Appointment;

class CreateAppointment {
  constructor(
    private appointmentRepository: AppointmentRepository
    ) {}
    
    async execute ({
      customer,
      startsAt,
      endsAt
    }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
      const overlappingAppointment = await this.appointmentRepository.findOverlappingAppointment(
        startsAt,
        endsAt
        )
        
        if (overlappingAppointment) {
          throw new Error('another appointment overlaps this appointment dates')
        }
        
        const appointment = new Appointment({
          customer,
          startsAt,
          endsAt
        });
        
        await this.appointmentRepository.create(appointment);
        
        return appointment;
      }
    }
    
    export {
      CreateAppointment
    }