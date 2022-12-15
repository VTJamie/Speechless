#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SkillStack } from '../lib/skill-stack';

const app = new cdk.App();
new SkillStack(app, 'skill-stack', {    
});
