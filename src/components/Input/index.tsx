import { TextInput, TextInputProps, TextStyle, View } from 'react-native';
import { Icon, IconProps } from '../icons';
import { styles } from './styles';
import { typography } from '@/theme/typography';
import { colors } from '@/theme/colors';

type Props = TextInputProps & Partial<IconProps>;

export function Input({ style, ...props }: Props) {
    return (
        <View style={[styles.container, style]}>
            {
                props.iconName && (
                    <Icon
                        iconName={props.iconName}
                        iconSize={props.iconSize}
                        iconColor={props.iconColor}
                    />
                )
            }
            <TextInput
                style={[typography.textMd as TextStyle, styles.input]}
                {...props}
                placeholderTextColor={colors.gray[500]}
            />
        </View>
    )
}