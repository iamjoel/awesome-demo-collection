declare module '*.css';
declare module '*.scss';

declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';

// 第三方库尚未提供声明文件
declare type ReactDefaultProps<P, K extends keyof P> = Required<Pick<P, K>>;
declare type ReactPropsWithDefault<P, K extends keyof P> = ReactDefaultProps<P, K> & P;

interface Window {
    codingHistory: any;
    reduxStore: any;
    microHook: any;
}
