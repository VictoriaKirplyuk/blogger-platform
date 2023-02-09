import { Nullable } from '../../../../common/types/Nullable';
import { StepAuth } from '../../../../enums/auth';

export interface IRegistrationInitState {
  stepAuth: Nullable<StepAuth>;
}

export const registrationInitState: IRegistrationInitState = {
  stepAuth: null,
};
