import { Stack, StackProps, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface SkillStackProps extends StackProps {  
}

export class SkillStack extends Stack {
  constructor(scope: Construct, id: string, props: SkillStackProps) {
    super(scope, id, props);        
  }
}
