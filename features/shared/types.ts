// All global types go here
interface ModalProps {
    visible: boolean;
    setVisible?: (show: boolean) => void;
}
type ErrorModalProps = ModalProps & {
    message: string;
    children?: React.ReactNode | string;
    onOk?: () => void;
};
type CalendarModalProps = ModalProps & {
    onSelectDate: (date: Date) => void;
    setVisible: (show: boolean) => void;
};
type Option<T = any> = {
    label: string;
    value: string | number;
    active?: boolean;
    data?: T;
};

export type { CalendarModalProps, ErrorModalProps, ModalProps, Option };
