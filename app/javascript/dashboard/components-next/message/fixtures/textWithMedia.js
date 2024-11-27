import camelcaseKeys from 'camelcase-keys';

export default camelcaseKeys(
  [
    {
      id: 5296,
      content: 'Hey, I want to get my Macbook repaird',
      inbox_id: 486,
      conversation_id: 1016,
      message_type: 0,
      content_type: 'text',
      status: 'sent',
      content_attributes: {
        in_reply_to: null,
      },
      created_at: 1732710571,
      private: false,
      source_id: null,
      sender: {
        additional_attributes: {
          created_at_ip: '::1',
        },
        custom_attributes: {},
        email: 'anthony@example.com',
        id: 599,
        identifier: null,
        name: 'anthony',
        phone_number: null,
        thumbnail: '',
        type: 'contact',
      },
    },
    {
      id: 5297,
      content: 'Give the team a way to reach you.',
      inbox_id: 486,
      conversation_id: 1016,
      message_type: 3,
      content_type: 'text',
      status: 'read',
      content_attributes: {},
      created_at: 1732710572,
      private: false,
      source_id: null,
    },
    {
      id: 5298,
      content: 'Get notified by email',
      inbox_id: 486,
      conversation_id: 1016,
      message_type: 3,
      content_type: 'input_email',
      status: 'read',
      content_attributes: {
        submitted_email: 'anthony@example.com',
      },
      created_at: 1732710572,
      private: false,
      source_id: null,
    },
    {
      conversation_id: 1016,
      status: 'read',
      content_type: 'text',
      processed_message_content: 'Conversation was reopened by John',
      id: 5299,
      content: 'Conversation was reopened by John',
      account_id: 2,
      inbox_id: 486,
      message_type: 2,
      created_at: 1732710724,
      updated_at: '2024-11-27T12:32:43.389Z',
      private: false,
      source_id: null,
      content_attributes: {},
      sender_type: null,
      sender_id: null,
      external_source_ids: {},
      additional_attributes: {},
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 0,
        last_activity_at: 1732710762,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
      previous_changes: {
        updated_at: ['2024-11-27T12:32:04.150Z', '2024-11-27T12:32:43.389Z'],
        status: ['sent', 'read'],
      },
    },
    {
      conversation_id: 1016,
      status: 'read',
      content_type: 'text',
      processed_message_content: 'John self-assigned this conversation',
      id: 5300,
      content: 'John self-assigned this conversation',
      account_id: 2,
      inbox_id: 486,
      message_type: 2,
      created_at: 1732710731,
      updated_at: '2024-11-27T12:32:43.419Z',
      private: false,
      source_id: null,
      content_attributes: {},
      sender_type: null,
      sender_id: null,
      external_source_ids: {},
      additional_attributes: {},
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 0,
        last_activity_at: 1732710762,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
      previous_changes: {
        updated_at: ['2024-11-27T12:32:11.416Z', '2024-11-27T12:32:43.419Z'],
        status: ['sent', 'read'],
      },
    },
    {
      conversation_id: 1016,
      status: 'read',
      content_type: 'text',
      processed_message_content:
        "Hey, I am Shivam, I'll be helping you today. What kind of repair are you looking for?",
      id: 5301,
      content:
        "Hey, I am Shivam, I'll be helping you today. What kind of repair are you looking for?",
      account_id: 2,
      inbox_id: 486,
      message_type: 1,
      created_at: 1732710762,
      updated_at: '2024-11-27T12:32:43.458Z',
      private: false,
      source_id: null,
      content_attributes: {},
      sender_type: 'User',
      sender_id: 1,
      external_source_ids: {},
      additional_attributes: {},
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 0,
        last_activity_at: 1732710762,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
      sender: {
        id: 1,
        name: 'John',
        available_name: 'John',
        avatar_url:
          'http://localhost:3000/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDBLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4e625d80e7ef2dc41354392bc214832fbe640840/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZvdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--ebe60765d222d11ade39165eae49cc4b2de18d89/picologo.png',
        type: 'user',
        availability_status: null,
        thumbnail:
          'http://localhost:3000/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDBLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4e625d80e7ef2dc41354392bc214832fbe640840/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZvdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--ebe60765d222d11ade39165eae49cc4b2de18d89/picologo.png',
      },
      previous_changes: {
        updated_at: ['2024-11-27T12:32:42.481Z', '2024-11-27T12:32:43.458Z'],
        status: ['sent', 'read'],
      },
    },
    {
      id: 5302,
      content:
        'I dropped my laptop and the screen is not cracked, can you fix it?',
      account_id: 2,
      inbox_id: 486,
      conversation_id: 1016,
      message_type: 0,
      created_at: 1732710776,
      updated_at: '2024-11-27T12:32:56.684Z',
      private: false,
      status: 'sent',
      source_id: null,
      content_type: 'text',
      content_attributes: {
        in_reply_to: null,
      },
      sender_type: 'Contact',
      sender_id: 599,
      external_source_ids: {},
      additional_attributes: {},
      processed_message_content:
        'I dropped my laptop and the screen is not cracked, can you fix it?',
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 1,
        last_activity_at: 1732710776,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
      sender: {
        additional_attributes: {
          created_at_ip: '::1',
        },
        custom_attributes: {},
        email: 'anthony@example.com',
        id: 599,
        identifier: null,
        name: 'anthony',
        phone_number: null,
        thumbnail: '',
        type: 'contact',
      },
    },
    {
      conversation_id: 1016,
      status: 'read',
      content_type: 'text',
      processed_message_content: 'John added repair',
      id: 5303,
      content: 'John added repair',
      account_id: 2,
      inbox_id: 486,
      message_type: 2,
      created_at: 1732710805,
      updated_at: '2024-11-27T12:33:30.138Z',
      private: false,
      source_id: null,
      content_attributes: {},
      sender_type: null,
      sender_id: null,
      external_source_ids: {},
      additional_attributes: {},
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 0,
        last_activity_at: 1732710809,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
      previous_changes: {
        updated_at: ['2024-11-27T12:33:25.620Z', '2024-11-27T12:33:30.138Z'],
        status: ['sent', 'read'],
      },
    },
    {
      conversation_id: 1016,
      status: 'read',
      content_type: 'text',
      processed_message_content:
        'Sure, will it be possible to share an image of the same?',
      id: 5304,
      content: 'Sure, will it be possible to share an image of the same?',
      account_id: 2,
      inbox_id: 486,
      message_type: 1,
      created_at: 1732710809,
      updated_at: '2024-11-27T12:33:30.167Z',
      private: false,
      source_id: null,
      content_attributes: {},
      sender_type: 'User',
      sender_id: 1,
      external_source_ids: {},
      additional_attributes: {},
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 0,
        last_activity_at: 1732710809,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
      sender: {
        id: 1,
        name: 'John',
        available_name: 'John',
        avatar_url:
          'http://localhost:3000/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDBLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4e625d80e7ef2dc41354392bc214832fbe640840/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZvdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--ebe60765d222d11ade39165eae49cc4b2de18d89/picologo.png',
        type: 'user',
        availability_status: null,
        thumbnail:
          'http://localhost:3000/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDBLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4e625d80e7ef2dc41354392bc214832fbe640840/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZvdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--ebe60765d222d11ade39165eae49cc4b2de18d89/picologo.png',
      },
      previous_changes: {
        updated_at: ['2024-11-27T12:33:29.116Z', '2024-11-27T12:33:30.167Z'],
        status: ['sent', 'read'],
      },
    },
    {
      id: 5305,
      content: null,
      account_id: 2,
      inbox_id: 486,
      conversation_id: 1016,
      message_type: 0,
      created_at: 1732710822,
      updated_at: '2024-11-27T12:33:42.634Z',
      private: false,
      status: 'sent',
      source_id: null,
      content_type: 'text',
      content_attributes: {
        in_reply_to: null,
      },
      sender_type: 'Contact',
      sender_id: 599,
      external_source_ids: {},
      additional_attributes: {},
      processed_message_content: null,
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 1,
        last_activity_at: 1732710822,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
      attachments: [
        {
          id: 17,
          message_id: 5305,
          file_type: 'image',
          account_id: 2,
          extension: null,
          data_url:
            'http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUFLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0f76a0caba1df9a5217630b5ca1fdfb09c9111d3/image.png',
          thumb_url:
            'http://localhost:3000/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUFLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0f76a0caba1df9a5217630b5ca1fdfb09c9111d3/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZvdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--ebe60765d222d11ade39165eae49cc4b2de18d89/image.png',
          file_size: 983912,
          width: null,
          height: null,
        },
      ],
      sender: {
        additional_attributes: {
          created_at_ip: '::1',
        },
        custom_attributes: {},
        email: 'anthony@example.com',
        id: 599,
        identifier: null,
        name: 'anthony',
        phone_number: null,
        thumbnail: '',
        type: 'contact',
      },
    },
    {
      id: 5306,
      content: 'There you go',
      account_id: 2,
      inbox_id: 486,
      conversation_id: 1016,
      message_type: 0,
      created_at: 1732710827,
      updated_at: '2024-11-27T12:33:47.262Z',
      private: false,
      status: 'sent',
      source_id: null,
      content_type: 'text',
      content_attributes: {
        in_reply_to: null,
      },
      sender_type: 'Contact',
      sender_id: 599,
      external_source_ids: {},
      additional_attributes: {},
      processed_message_content: 'There you go',
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 1,
        last_activity_at: 1732710827,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
      sender: {
        additional_attributes: {
          created_at_ip: '::1',
        },
        custom_attributes: {},
        email: 'anthony@example.com',
        id: 599,
        identifier: null,
        name: 'anthony',
        phone_number: null,
        thumbnail: '',
        type: 'contact',
      },
    },
    {
      id: 5307,
      content: null,
      account_id: 2,
      inbox_id: 486,
      conversation_id: 1016,
      message_type: 0,
      created_at: 1732710841,
      updated_at: '2024-11-27T12:34:01.991Z',
      private: false,
      status: 'sent',
      source_id: null,
      content_type: 'text',
      content_attributes: {
        in_reply_to: null,
      },
      sender_type: 'Contact',
      sender_id: 599,
      external_source_ids: {},
      additional_attributes: {},
      processed_message_content: null,
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 1,
        last_activity_at: 1732710841,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
      attachments: [
        {
          id: 18,
          message_id: 5307,
          file_type: 'file',
          account_id: 2,
          extension: null,
          data_url:
            'http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUVLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4f7e671db635b73d12ee004e87608bc098ef6b3b/letterhead.pdf',
          thumb_url:
            'http://localhost:3000/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUVLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4f7e671db635b73d12ee004e87608bc098ef6b3b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9UY21WemFYcGxYM1J2WDJacGJHeGJCMmtCK2pBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--5c454d5f03daf1f9f4068cb242cf9885cc1815b6/letterhead.pdf',
          file_size: 99844,
          width: null,
          height: null,
        },
      ],
      sender: {
        additional_attributes: {
          created_at_ip: '::1',
        },
        custom_attributes: {},
        email: 'anthony@example.com',
        id: 599,
        identifier: null,
        name: 'anthony',
        phone_number: null,
        thumbnail: '',
        type: 'contact',
      },
    },
    {
      id: 5308,
      content: "Here's the invoice too",
      account_id: 2,
      inbox_id: 486,
      conversation_id: 1016,
      message_type: 0,
      created_at: 1732710847,
      updated_at: '2024-11-27T12:34:07.380Z',
      private: false,
      status: 'sent',
      source_id: null,
      content_type: 'text',
      content_attributes: {
        in_reply_to: null,
      },
      sender_type: 'Contact',
      sender_id: 599,
      external_source_ids: {},
      additional_attributes: {},
      processed_message_content: "Here's the invoice too",
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 1,
        last_activity_at: 1732710847,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
      sender: {
        additional_attributes: {
          created_at_ip: '::1',
        },
        custom_attributes: {},
        email: 'anthony@example.com',
        id: 599,
        identifier: null,
        name: 'anthony',
        phone_number: null,
        thumbnail: '',
        type: 'contact',
      },
    },
    {
      conversation_id: 1016,
      status: 'read',
      content_type: 'text',
      processed_message_content:
        '[@Bruce](mention://user/30/Bruce) do you think this is covered? Seems like they are out of damage insurance by a week',
      id: 5309,
      content:
        '[@Bruce](mention://user/30/Bruce) do you think this is covered? Seems like they are out of damage insurance by a week',
      account_id: 2,
      inbox_id: 486,
      message_type: 1,
      created_at: 1732710890,
      updated_at: '2024-11-27T12:36:46.586Z',
      private: true,
      source_id: null,
      content_attributes: {},
      sender_type: 'User',
      sender_id: 1,
      external_source_ids: {},
      additional_attributes: {},
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 0,
        last_activity_at: 1732711005,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
      sender: {
        id: 1,
        name: 'John',
        available_name: 'John',
        avatar_url:
          'http://localhost:3000/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDBLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4e625d80e7ef2dc41354392bc214832fbe640840/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZvdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--ebe60765d222d11ade39165eae49cc4b2de18d89/picologo.png',
        type: 'user',
        availability_status: null,
        thumbnail:
          'http://localhost:3000/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDBLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4e625d80e7ef2dc41354392bc214832fbe640840/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZvdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--ebe60765d222d11ade39165eae49cc4b2de18d89/picologo.png',
      },
      previous_changes: {
        updated_at: ['2024-11-27T12:34:50.013Z', '2024-11-27T12:36:46.586Z'],
        status: ['sent', 'read'],
      },
    },
    {
      conversation_id: 1016,
      status: 'read',
      content_type: 'text',
      processed_message_content:
        '[@John](mention://user/1/John) They have been a customer for a while, we can offer a 30% discount on the repair',
      id: 5310,
      content:
        '[@John](mention://user/1/John) They have been a customer for a while, we can offer a 30% discount on the repair',
      account_id: 2,
      inbox_id: 486,
      message_type: 1,
      created_at: 1732710942,
      updated_at: '2024-11-27T12:36:46.631Z',
      private: true,
      source_id: null,
      content_attributes: {},
      sender_type: 'User',
      sender_id: 30,
      external_source_ids: {},
      additional_attributes: {},
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 0,
        last_activity_at: 1732711005,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
      sender: {
        id: 30,
        name: 'Bruce',
        available_name: 'Bruce',
        avatar_url:
          'http://localhost:3000/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc3dKIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--76f2acbf7e24fe4c4aa7b053051df9c74ea9d8aa/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZvdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--df796c2af3c0153e55236c2f3cf3a199ac2cb6f7/67.jpg',
        type: 'user',
        availability_status: null,
        thumbnail:
          'http://localhost:3000/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc3dKIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--76f2acbf7e24fe4c4aa7b053051df9c74ea9d8aa/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZvdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--df796c2af3c0153e55236c2f3cf3a199ac2cb6f7/67.jpg',
      },
      previous_changes: {
        updated_at: ['2024-11-27T12:35:42.614Z', '2024-11-27T12:36:46.631Z'],
        status: ['sent', 'read'],
      },
    },
    {
      conversation_id: 1016,
      status: 'read',
      content_type: 'text',
      processed_message_content:
        "This document suggests you are out of the damage coverage period. But we can repair this for sure, and since you've been a customer for a while and the coverage is off just by a week, we can offer a 30% discount on the repair. Does that work?",
      id: 5311,
      content:
        "This document suggests you are out of the damage coverage period. But we can repair this for sure, and since you've been a customer for a while and the coverage is off just by a week, we can offer a 30% discount on the repair. Does that work?",
      account_id: 2,
      inbox_id: 486,
      message_type: 1,
      created_at: 1732711005,
      updated_at: '2024-11-27T12:36:46.715Z',
      private: false,
      source_id: null,
      content_attributes: {
        in_reply_to: 5307,
        in_reply_to_external_id: null,
      },
      sender_type: 'User',
      sender_id: 1,
      external_source_ids: {},
      additional_attributes: {},
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 0,
        last_activity_at: 1732711005,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
      sender: {
        id: 1,
        name: 'John',
        available_name: 'John',
        avatar_url:
          'http://localhost:3000/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDBLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4e625d80e7ef2dc41354392bc214832fbe640840/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZvdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--ebe60765d222d11ade39165eae49cc4b2de18d89/picologo.png',
        type: 'user',
        availability_status: null,
        thumbnail:
          'http://localhost:3000/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDBLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4e625d80e7ef2dc41354392bc214832fbe640840/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZvdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--ebe60765d222d11ade39165eae49cc4b2de18d89/picologo.png',
      },
      previous_changes: {
        updated_at: ['2024-11-27T12:36:45.557Z', '2024-11-27T12:36:46.715Z'],
        status: ['sent', 'read'],
      },
    },
    {
      conversation_id: 1016,
      status: 'read',
      content_type: 'text',
      processed_message_content: 'John set the priority to medium',
      id: 5312,
      content: 'John set the priority to medium',
      account_id: 2,
      inbox_id: 486,
      message_type: 2,
      created_at: 1732711008,
      updated_at: '2024-11-27T12:37:05.985Z',
      private: false,
      source_id: null,
      content_attributes: {},
      sender_type: null,
      sender_id: null,
      external_source_ids: {},
      additional_attributes: {},
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 0,
        last_activity_at: 1732711025,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
      previous_changes: {
        updated_at: ['2024-11-27T12:36:48.047Z', '2024-11-27T12:37:05.985Z'],
        status: ['sent', 'read'],
      },
    },
    {
      id: 5313,
      content: 'This is perfect, thanks a lot. Let me know the next steps',
      account_id: 2,
      inbox_id: 486,
      conversation_id: 1016,
      message_type: 0,
      created_at: 1732711025,
      updated_at: '2024-11-27T12:37:05.439Z',
      private: false,
      status: 'sent',
      source_id: null,
      content_type: 'text',
      content_attributes: {
        in_reply_to: null,
      },
      sender_type: 'Contact',
      sender_id: 599,
      external_source_ids: {},
      additional_attributes: {},
      processed_message_content:
        'This is perfect, thanks a lot. Let me know the next steps',
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 1,
        last_activity_at: 1732711025,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
      sender: {
        additional_attributes: {
          created_at_ip: '::1',
        },
        custom_attributes: {},
        email: 'anthony@example.com',
        id: 599,
        identifier: null,
        name: 'anthony',
        phone_number: null,
        thumbnail: '',
        type: 'contact',
      },
    },
    {
      conversation_id: 1016,
      status: 'read',
      content_type: 'text',
      processed_message_content:
        "Sure, you can fill this form and mail the item to us. And we will replace the screen within 5 business days and dispatch it for you. I've also attached and estimate for the repair and the shipping charges",
      id: 5314,
      content:
        "Sure, you can fill this form and mail the item to us. And we will replace the screen within 5 business days and dispatch it for you. I've also attached and estimate for the repair and the shipping charges",
      account_id: 2,
      inbox_id: 486,
      message_type: 1,
      created_at: 1732711103,
      updated_at: '2024-11-27T12:38:24.668Z',
      private: false,
      source_id: null,
      content_attributes: {},
      sender_type: 'User',
      sender_id: 1,
      external_source_ids: {},
      additional_attributes: {},
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 0,
        last_activity_at: 1732711103,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
      attachments: [
        {
          id: 19,
          message_id: 5314,
          file_type: 'image',
          account_id: 2,
          extension: null,
          data_url:
            'http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUlLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ffd23d216c4a6c15a7fae0f15c84620ba98d002e/letterhead-with-margin.png',
          thumb_url:
            'http://localhost:3000/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUlLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ffd23d216c4a6c15a7fae0f15c84620ba98d002e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZvdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--ebe60765d222d11ade39165eae49cc4b2de18d89/letterhead-with-margin.png',
          file_size: 287949,
          width: null,
          height: null,
        },
        {
          id: 20,
          message_id: 5314,
          file_type: 'file',
          account_id: 2,
          extension: null,
          data_url:
            'http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaU1LIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9f15e48e101a6b85f454aacd5f9584039ba0a6b9/letterhead.pdf',
          thumb_url:
            'http://localhost:3000/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaU1LIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9f15e48e101a6b85f454aacd5f9584039ba0a6b9/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9UY21WemFYcGxYM1J2WDJacGJHeGJCMmtCK2pBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--5c454d5f03daf1f9f4068cb242cf9885cc1815b6/letterhead.pdf',
          file_size: 99844,
          width: null,
          height: null,
        },
      ],
      sender: {
        id: 1,
        name: 'John',
        available_name: 'John',
        avatar_url:
          'http://localhost:3000/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDBLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4e625d80e7ef2dc41354392bc214832fbe640840/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZvdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--ebe60765d222d11ade39165eae49cc4b2de18d89/picologo.png',
        type: 'user',
        availability_status: null,
        thumbnail:
          'http://localhost:3000/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDBLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4e625d80e7ef2dc41354392bc214832fbe640840/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZvdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--ebe60765d222d11ade39165eae49cc4b2de18d89/picologo.png',
      },
      previous_changes: {
        updated_at: ['2024-11-27T12:38:23.382Z', '2024-11-27T12:38:24.668Z'],
        status: ['sent', 'read'],
      },
    },
    {
      id: 5315,
      content: "Great. I'll send it across. Thanks",
      account_id: 2,
      inbox_id: 486,
      conversation_id: 1016,
      message_type: 0,
      created_at: 1732711121,
      updated_at: '2024-11-27T12:38:41.127Z',
      private: false,
      status: 'sent',
      source_id: null,
      content_type: 'text',
      content_attributes: {
        in_reply_to: null,
      },
      sender_type: 'Contact',
      sender_id: 599,
      external_source_ids: {},
      additional_attributes: {},
      processed_message_content: "Great. I'll send it across. Thanks",
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 1,
        last_activity_at: 1732711121,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
      sender: {
        additional_attributes: {
          created_at_ip: '::1',
        },
        custom_attributes: {},
        email: 'anthony@example.com',
        id: 599,
        identifier: null,
        name: 'anthony',
        phone_number: null,
        thumbnail: '',
        type: 'contact',
      },
    },
    {
      conversation_id: 1016,
      status: 'read',
      content_type: 'text',
      processed_message_content:
        'Glad I could help. Let me know if you need some other help',
      id: 5316,
      content: 'Glad I could help. Let me know if you need some other help',
      account_id: 2,
      inbox_id: 486,
      message_type: 1,
      created_at: 1732711141,
      updated_at: '2024-11-27T12:39:02.247Z',
      private: false,
      source_id: null,
      content_attributes: {},
      sender_type: 'User',
      sender_id: 1,
      external_source_ids: {},
      additional_attributes: {},
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 0,
        last_activity_at: 1732711141,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
      sender: {
        id: 1,
        name: 'John',
        available_name: 'John',
        avatar_url:
          'http://localhost:3000/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDBLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4e625d80e7ef2dc41354392bc214832fbe640840/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZvdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--ebe60765d222d11ade39165eae49cc4b2de18d89/picologo.png',
        type: 'user',
        availability_status: 'busy',
        thumbnail:
          'http://localhost:3000/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDBLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4e625d80e7ef2dc41354392bc214832fbe640840/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2RwQWZvdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--ebe60765d222d11ade39165eae49cc4b2de18d89/picologo.png',
      },
      previous_changes: {
        updated_at: ['2024-11-27T12:39:01.126Z', '2024-11-27T12:39:02.247Z'],
        status: ['sent', 'read'],
      },
    },
    {
      id: 5317,
      content: 'Conversation was marked resolved by John',
      account_id: 2,
      inbox_id: 486,
      conversation_id: 1016,
      message_type: 2,
      created_at: 1732711142,
      updated_at: '2024-11-27T12:39:02.911Z',
      private: false,
      status: 'sent',
      source_id: null,
      content_type: 'text',
      content_attributes: {},
      sender_type: null,
      sender_id: null,
      external_source_ids: {},
      additional_attributes: {},
      processed_message_content: 'Conversation was marked resolved by John',
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 0,
        last_activity_at: 1732711142,
        contact_inbox: {
          source_id: 'f42d4630-7c41-4af3-bbc7-7c43e2aa2fc7',
        },
      },
    },
  ],
  { deep: true }
);
