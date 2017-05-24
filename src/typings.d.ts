/* SystemJS module definition */
declare var module: {
  id: string;
};

/* json module definition */
declare module "*.json" {
    const value: any;
    export default value;
}