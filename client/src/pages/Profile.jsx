
import { useState } from 'react';
import DefaultLayout from '../components/DefaultLayout'
import { Form , Tabs , Button , Spin , message} from 'antd';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import ExperienceProjects from '../components/ExperienceProjects';
import axios from 'axios';
function Profile() {
  const [loading, setLoading] = useState(false)
  const user = JSON.parse(localStorage.getItem('cvgenerator-user'))
  const onFinish = async (values) => {
    setLoading(true)
    try {
       const result = await axios.post('http://localhost:5000/api/user/update', {...values, _id : user._id});
      localStorage.setItem('cvgenerator-user',JSON.stringify(result.data))
       setLoading(false)
      message.success('Profile updated successfully')
    } catch (error) {
      setLoading(false)
      console.error(error)
  message.error('Registration failed. Check the console for details.')
    }
  };
    const onChange = (key) => {
        console.log(key);
      };
      const items = [
        {
          key: '1',
          label: 'Personal Info',
          children: <PersonalInfo />,
        },
        {
          key: '2',
          label: 'Skills and Education',
          children: <SkillsEducation />,
        },
        {
          key: '3',
          label: 'Experience and projects',
          children: <ExperienceProjects />,
        },
      ];
  return (
    <DefaultLayout>
      { loading && <Spin size="large" /> }
        <div className="update-profile">
            <h4>Update ptofile</h4>
            <hr />
            <Form layout='vertical' onFinish={onFinish } initialValues={user} >
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                <Button htmlType='submit' >Update</Button>
            </Form>
        </div>
    </DefaultLayout>
  )
}
 
export default Profile