export type OttoMood = 'idle' | 'happy' | 'thinking' | 'excited' | 'confused';
export type OttoAction = 'none' | 'pointing' | 'waving' | 'drifting';
export type TentacleMode = 'idle' | 'wave' | 'swim' | 'walk' | 'grab';
export type LookDir = 'forward' | 'left' | 'right' | 'up';

export interface Waypoint {
  id: string;
  x?: number;
  y?: number;
  targetId?: string;
  enterFrom?: 'left' | 'right' | 'top' | 'bottom';
  message?: string | null;
  autoAdvance?: boolean | number;
  duration?: number;
  tentacleMode?: TentacleMode;
  lookDir?: LookDir;
  facingLeft?: boolean;
  opacity?: number;
  hasButton?: boolean;
  mode?: string;
}
