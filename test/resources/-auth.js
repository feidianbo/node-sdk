/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = {
  relationship_extraction: {
    url: 'https://gateway.watsonplatform.net/relationship-extraction-beta/api',
    username: '219f6a72-51d6-49a2-9038-ec27d1840c0e',
    password: '1Ee9EGvQXAB0',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v1-beta'
  },
  concept_insights: {
    url: 'https://gateway.watsonplatform.net/concept-insights/api',
    username: 'd7e66e0e-c006-4fa9-86a8-b78d97f668af',
    password: 'mj1aZLZueg5p',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    account_id: 'larmu8up2pa3',
    version: 'v2'
  },
  speech_to_text: {
    url: 'https://stream.watsonplatform.net/speech-to-text/api',
    username: '0c8dafce-3cf2-46d8-9116-408e35a35fe2',
    password: 'MaiEL4fS1zlJ',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v1'
  },
  text_to_speech: {
    url: 'https://stream.watsonplatform.net/text-to-speech/api',
    username: '5713dd6b-21c5-4ca4-96d6-6b348aaaf86b',
    password: 'Xo2Y9QrMn0vJ',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v1'
  },
  tradeoff_analytics: {
    url: 'https://gateway.watsonplatform.net/tradeoff-analytics/api',
    username: 'c6a24bd2-c2af-433d-b43f-302ca002f81a',
    password: 'SOpGFvV8jqmK',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v1'
  },
  visual_recognition: {
    v3: {
      url: 'https://gateway-a.watsonplatform.net/visual-recognition/api',
      api_key: 'daccb391c04d14a8ccd0dec0c6de05e4346e163d',
      version_date: '2016-05-19',
      headers: {
        'X-Watson-Learning-Opt-Out': 1,
        'X-Watson-Test': 1
      },
      version: 'v3'
    }
  },
  personality_insights: {
    url: 'https://gateway.watsonplatform.net/personality-insights/api',
    username: '75aa4902-b7d6-4565-8268-8a782293feab',
    password: '47tkg0d7CRnA',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v2'
  },
  dialog: {
    url: 'https://gateway.watsonplatform.net/dialog/api',
    username: '4e00924f-9d43-452f-acc6-369a5dad0e73',
    password: 'bg7e3zepM93v',
    dialog_id: '795ff999-ff33-4d6a-8698-2b00e3518ccb',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v1'
  },
  language_translation: {
    "url": "https://gateway.watsonplatform.net/language-translator/api",
    "username": "73e79f7c-c83e-4b6e-93f9-ccdfa2d23769",
    "password": "nqwuJ1cFBq5g",
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v2'
  },
  language_translator: {
    url: 'https://gateway.watsonplatform.net/language-translation/api',
    username: 'cd0c6943-aaeb-4e7e-a726-45fb9c50e202',
    password: '2DXhk3K6Tbtf',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v2'
  },

  tone_analyzer: {
    url: 'https://gateway.watsonplatform.net/tone-analyzer/api',
    username: '843e9f60-fca7-4df0-acce-8d9e6b322170',
    password: 'oUQWSVAgDu5C',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v3',
    version_date: '2016-06-19'
  },
  alchemy: {
    api_key: '46a1e8f5b886ef0609321a8a5fd729a948af8f78'
  },
  document_conversion: {
    url: 'https://gateway.watsonplatform.net/document-conversion/api',
    username: '44c91880-dc21-4484-b4b7-b888a34d6c4c',
    password: 'Zfhd86K8YFCO',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v1',
    version_date: '2015-12-01'
  },
  retrieve_and_rank: {
    url: 'https://gateway.watsonplatform.net/retrieve-and-rank/api',
    username: 'bf50dcba-e29c-4bd3-8a36-273ea37d3707',
    password: 'V9ZwUqGcziOd',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v1'
  },
  natural_language_classifier: {
    url: 'https://gateway.watsonplatform.net/natural-language-classifier/api',
    username: '4d30ddb6-735b-4d20-b5fd-fae0076dc5c9',
    password: '9m4ac0Uh7Ecy',
    classifier_id: '563C46x19-nlc-4405',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v1'
  },
  conversation: {
    url: 'https://gateway.watsonplatform.net/conversation/api',
    username: '2717b722-be9a-4da2-9c04-ce82efed6f4b',
    password: 'bCmP6u4rScrB',
    workspace_id: '2657e607-f726-49a5-8bca-28f6ab1a472c',
    version_date: '2016-07-11',
    headers: {
      'X-Watson-Learning-Opt-Out': 1,
      'X-Watson-Test': 1
    },
    version: 'v1'
  }
};
