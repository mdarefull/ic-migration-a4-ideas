export abstract class ComponentV2GenericInputParameter {
  get attributeExtended(): number { return 0; }
  get propertyExtended(): string { return undefined; }
  get methodExtended(): boolean { return false; }
  get ilineExpressionExtended(): boolean { return true; }
  get additionalInput(): string { return 'default value'; }
}
