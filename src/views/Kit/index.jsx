import { useState } from 'react';

import FlexContainer from 'src/components/FlexContainer';
import Icon from 'src/components/Icon';
import Button from 'src/components/Button';
import TextInput from 'src/components/TextInput';

import './Kit.style.scss';

function Kit() {
  const [value, setValue] = useState(undefined);

  return (
    <FlexContainer className="kit-wrapper" column>
      <FlexContainer>
        <p>آیکون ها:</p>
        <Icon name="close" />
        <Icon name="done" />
        <Icon name="expand_more" />
        <Icon name="expand_less" />
      </FlexContainer>
      <Button>salam</Button>
      <Button secondary>salam</Button>
      <TextInput onChange={setValue} value={value} title="عنوان" placeholder="قالب پیشفرض" />
      <TextInput
        onChange={setValue}
        value={value}
        title="عنوان"
        placeholder="قالب پیشفرض"
        errors={[
          'با خطای ۱',
          'با خطای ۲',
        ]}
      />
      <TextInput onChange={setValue} value={value} placeholder="قالب بدون عنوان - استفاده نکنید! اینپوت" />
      <TextInput
        onChange={setValue}
        value={value}
        title="عنوان"
        placeholder="اینپوت با محتوای اختصاصی بالا سمت چپ"
        renderHint={() => <p>سلام من اختصاصی ام</p>}
      />
      <TextInput
        onChange={setValue}
        value={value}
        title="نام و نام خوانوادگی:"
        placeholder="سیدمحمدهادی طباطبایی"
        errors={[
          'تعداد حروف کم است.',
        ]}
      />
    </FlexContainer>
  );
}

export default Kit;
