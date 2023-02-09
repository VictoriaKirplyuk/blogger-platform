import { Nullable } from '../../../../common/types/Nullable';
import { StepAuth } from '../../../../enums/auth';

export const setStepAuth = (payload: { stepAuth: Nullable<StepAuth> }) =>
  ({
    type: 'AUTH/SET-STEP-AUTH',
    payload,
  } as const);

export type RegistrationActionsType = ReturnType<typeof setStepAuth>;
